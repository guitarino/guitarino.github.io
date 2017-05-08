It's very [common](https://stackoverflow.com/questions/436120/javascript-accessing-private-member-variables-from-prototype-defined-functions/436147#436147) for JavaScript developers to claim that it's impossible to create truly encapsulated properties and methods on an object **and use them on its prototype**.

In ES6, there are a few ways of easily achieving private properties without memory leaks. For example, you could use a ES6 **Symbol**:

```javascript
// Closure
var SomeClass = function() {
    var priv_prop = Symbol();
    var SomeClass = function() {
        this[priv_prop] = 200;
    };
    SomeClass.prototype.test = function() {
        console.log(this[priv_prop]);
    };
    return SomeClass;
}();
var instance = new SomeClass();
instance.test(); // `200` logged
```

Alternatively, you could use a **WeakMap**:

```javascript
// Closure
var SomeClass = function() {
    var priv_prop1 = new WeakMap();
    var priv_prop2 = new WeakMap();
    var SomeClass = function() {
        priv_prop1.set(this, 100);
        priv_prop2.set(this, 200);
    };
    SomeClass.prototype.test = function() {
        console.log(priv_prop1.get(this));
        console.log(priv_prop2.get(this));
    };
    return SomeClass;
}();
var instance = new SomeClass();
instance.test(); // `100` and `200` logged
```

The problem with the **Symbol** method is that you can still access those properties using `Object.getOwnPropertySymbols`. In either case, you would likely have to include bulky polyfills in production code.

Prior to ES6, there was no *obvious* way to create private properties usable on prototype. The claim is that you either have to abandon the idea or use a memory leaky **Map** (alternatively, you could use 2 arrays). But what if I told you that there is actually a way to do this that is cross-browser, needs no polyfills or ES6, and doesn't produce memory leaks?

## The idea

I haven't seen this method used by anyone (**EDIT**: it was pointed out to me that I wasn't the first one to come up with this method. **[Read more here](https://medium.com/front-end-hacking/achieving-complete-data-encapsulation-in-javascript-5454a6b7410b)**), so I'd like to call it an **accessor pattern**. The idea is to create a *closure*, create a *key* inside the closure and create a *storage for private properties* that can only be accessed if the correct key is provided. Here's how you would implement it:

```javascript
/* Here's how you can create truly private
   properties in JS and use them on prototype */

// Closure
var SomeClass = function() {
    var key = {};

    var private = function() {
        var obj = {};
        return function(testkey) {
            if(key === testkey) return obj;
            // If the user of the class tries to access private
            // properties, they won't have the access to the `key`
            console.error('Cannot access private properties');
            return undefined;
        };
    };

    var SomeClass = function() {
        this._ = private(); // Creates a private object
        this._(key).priv_prop = 200; // this._(key) will return the private object
    };

    SomeClass.prototype.test = function() {
        console.log(this._(key).priv_prop); // Using property from prototype
    };

    return SomeClass;
}();

var instance = new SomeClass();
instance.test(); // `200` logged

var wrong_key = {};
instance._(wrong_key); // undefined; error logged
```

Pretty simple, huh? `private` function creates the *private storage* and returns a private access function that will only return the *storage* if the correct *key* is provided. Then, in constructor, we assign this private access function to `this._` which can be easily used on the prototype, provided that the prototype properties also have access to the *key*. Basically, there is no way to access the *private storage* without having the correct *key*. Hence, if the user tries to call `this._` with any argument, maybe with a `wrong_key`, then the attempt will fail, error will be logged, and all the user will get is undefined.

Advantages of this method:

* It's quite simple. All you need is to create a *private storage*, and you can access all private properties inline within a constructor / prototype.
* It lets you create truly private properties that can be accessed from the prototype. The user of the class will not be able to access them.

Disadvantage of this method:

* It slightly pollutes the namespace, because you have to assign the private storage to `this._` or alike, but there's probably no other way to do this.

## A problem

A minor problem with this method is that, in case of prototypal inheritance, if both child and parent use the same property name for the private access function (in this example, `this._`), then the parent's private properties cannot be accessed within parent's prototype, because `this._` will refer to child's private access function. Here's what I mean,

```javascript
// Note: this Gist is to show a problem with accessor pattern
// and inheritance. Do not use!

var private = function(key) {
    var obj = {};
    return function(testkey) {
        if(key === testkey) return obj;
        console.error('Cannot access private properties');
        return undefined;
    };
};

var ParentClass = function() {
    var key = {};
    var ParentClass = function() {
        this._ = private(key);
        this._(key).priv_prop = 100;
    };
    ParentClass.prototype.parent_test = function() {
        console.log(this._(key).priv_prop);
    };
    return ParentClass;
}();

var ChildClass = function() {
    var key = {};
    var ChildClass = function() {
        ParentClass.call(this);
        this._ = private(key);
        this._(key).priv_prop = 200;
    };
    ChildClass.prototype = Object.create(
        ParentClass.prototype
    );
    ChildClass.prototype.test = function() {
        console.log(this._(key).priv_prop);
    };
    return ChildClass;
}();

var instance = new ChildClass();
instance.test(); // `200` is correctly logged
instance.parent_test(); // ERROR! (expected result: `100`)
```

When `instance.parent_test` is called, `this._` inside it will refer to the child's private access function, hence, the `key` will mismatch and the error will be logged. However, this problem can be quite easily solved.

## The final solution

The best solution is to namespace and make sure that parent and child have different property names for their private access functions. Here's the final solution:

```javascript
/* Here's how you can create truly private
   properties in JS and use them on prototype */

// Creates private storage, secures with a key, and
// returns a private access function
var private = function(key) {
    var obj = {};
    return function(testkey) {
        if(key === testkey) return obj;
        console.error('Cannot access private properties');
        return undefined;
    };
};

// Create closure
var ParentClass = function() {
    var priv = '_ParentClass' + Math.random(); // Namespace
    var key = {}; // Create key withing closure
    var ParentClass = function() {
        this[priv] = private(key); // Create private storage
        this[priv](key).priv_prop = 100; // Modify any private data
    };
    ParentClass.prototype.parent_test = function() {
        console.log(this[priv](key).priv_prop); // Access private data
    };
    return ParentClass;
}();

var ChildClass = function() {
    var priv = '_ChildClass' + Math.random();
    var key = {};
    var ChildClass = function() {
        ParentClass.call(this);
        this[priv] = private(key);
        this[priv](key).priv_prop = 200;
    };
    ChildClass.prototype = Object.create(
        ParentClass.prototype
    );
    ChildClass.prototype.test = function() {
        console.log(this[priv](key).priv_prop);
    };
    return ChildClass;
}();

var instance = new ChildClass();
instance.test(); // `200` logged, as expected
instance.parent_test(); // `100` logged, as expected

// Yet, there's no way to access the property from outside of the closure
```

Pretty much the only difference from the previous code snippet is that we replaced `this._` for both child and parent classes with `this[priv]`, where `priv` is namespaced and randomly generated to ensure that private access function is stored under a different property name for child and parent.

Another recommendation I can make is that you should probably secure `this[priv]` by making it non-configurable, non-enumerable and read-only:

```javascript
    Object.defineProperty(this, priv, {
        value: private(key)
    })
```

Instead of just

```javascript
    this[priv] = private(key)
```

This will make sure that user will not be able to remove or modify `this[priv]`, which is crucial for correct private storage functioning.

## Conclusion

Go ahead and use **accessor pattern**! It allows you to create truly encapsulated properties and use them on a prototype. Let others know about this method so we don't continue the misconception that privacy is impossible to achieve in JavaScript. Sharing this article will also help **😊**