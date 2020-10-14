(self.webpackChunkguitarino_github_io=self.webpackChunkguitarino_github_io||[]).push([[921],{2921:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v,menu:()=>u,title:()=>h});var r=n(3517),a=n.n(r),s=n(9306),o=n(3594),i=n(6635),p=n(4870),c=n(6777);function l(e){return(0,s.h)(o.Z,a()({},e,{class:"Markdown ".concat(e.class||""),options:{overrides:{a:i.Z,pre:s.HY,code:function(e){var t=e.class&&e.class.replace(/^lang-/,"");return t?(0,s.h)(p.Z,a()({},e,{language:t,style:c.Z})):(0,s.h)("code",e)}}}}))}var h="You Can Create Private Properties In JS - Kirill Shestakov",u="blog";function v(e){return(0,s.h)(l,{class:"AccessorPattern ".concat(e.class||"")},"# You Can Create Private Properties In JS\n\nIt's very [common](https://stackoverflow.com/questions/436120/javascript-accessing-private-member-variables-from-prototype-defined-functions/436147#436147) for JavaScript developers to claim that it's impossible to create truly encapsulated properties and methods on an object **and use them on its prototype**.\n\nIn ES6, there are a few ways of easily achieving private properties without memory leaks. For example, you could use a ES6 **Symbol**:\n\n```javascript\n// Closure\nvar SomeClass = function() {\n    var priv_prop = Symbol();\n    var SomeClass = function() {\n        this[priv_prop] = 200;\n    };\n    SomeClass.prototype.test = function() {\n        console.log(this[priv_prop]);\n    };\n    return SomeClass;\n}();\nvar instance = new SomeClass();\ninstance.test(); // `200` logged\n```\n\nAlternatively, you could use a **WeakMap**:\n\n```javascript\n// Closure\nvar SomeClass = function() {\n    var priv_prop1 = new WeakMap();\n    var priv_prop2 = new WeakMap();\n    var SomeClass = function() {\n        priv_prop1.set(this, 100);\n        priv_prop2.set(this, 200);\n    };\n    SomeClass.prototype.test = function() {\n        console.log(priv_prop1.get(this));\n        console.log(priv_prop2.get(this));\n    };\n    return SomeClass;\n}();\nvar instance = new SomeClass();\ninstance.test(); // `100` and `200` logged\n```\n\nThe problem with the **Symbol** method is that you can still access those properties using `Object.getOwnPropertySymbols`. In either case, you would likely have to include bulky polyfills in production code.\n\nPrior to ES6, there was no *obvious* way to create private properties usable on prototype. The claim is that you either have to abandon the idea or use a memory leaky **Map** (alternatively, you could use 2 arrays). But what if I told you that there is actually a way to do this that is cross-browser, needs no polyfills or ES6, and doesn't produce memory leaks?\n\n## The idea\n\nI haven't seen this method used by anyone (**EDIT**: it was pointed out to me that I wasn't the first one to come up with this method. **[Read more here](https://medium.com/front-end-hacking/achieving-complete-data-encapsulation-in-javascript-5454a6b7410b)**), so I'd like to call it an **accessor pattern**. The idea is to create a *closure*, create a *key* inside the closure and create a *storage for private properties* that can only be accessed if the correct key is provided. Here's how you would implement it:\n\n```javascript\n/* Here's how you can create truly private\n   properties in JS and use them on prototype */\n\n// Closure\nvar SomeClass = function() {\n    var key = {};\n\n    var private = function() {\n        var obj = {};\n        return function(testkey) {\n            if(key === testkey) return obj;\n            // If the user of the class tries to access private\n            // properties, they won't have the access to the `key`\n            console.error('Cannot access private properties');\n            return undefined;\n        };\n    };\n\n    var SomeClass = function() {\n        this._ = private(); // Creates a private object\n        this._(key).priv_prop = 200; // this._(key) will return the private object\n    };\n\n    SomeClass.prototype.test = function() {\n        console.log(this._(key).priv_prop); // Using property from prototype\n    };\n\n    return SomeClass;\n}();\n\nvar instance = new SomeClass();\ninstance.test(); // `200` logged\n\nvar wrong_key = {};\ninstance._(wrong_key); // undefined; error logged\n```\n\nPretty simple, huh? `private` function creates the *private storage* and returns a private access function that will only return the *storage* if the correct *key* is provided. Then, in constructor, we assign this private access function to `this._` which can be easily used on the prototype, provided that the prototype properties also have access to the *key*. Basically, there is no way to access the *private storage* without having the correct *key*. Hence, if the user tries to call `this._` with any argument, maybe with a `wrong_key`, then the attempt will fail, error will be logged, and all the user will get is undefined.\n\nAdvantages of this method:\n\n* It's quite simple. All you need is to create a *private storage*, and you can access all private properties inline within a constructor / prototype.\n* It lets you create truly private properties that can be accessed from the prototype. The user of the class will not be able to access them.\n\nDisadvantage of this method:\n\n* It slightly pollutes the namespace, because you have to assign the private storage to `this._` or alike, but there's probably no other way to do this.\n\n## A problem\n\nA minor problem with this method is that, in case of prototypal inheritance, if both child and parent use the same property name for the private access function (in this example, `this._`), then the parent's private properties cannot be accessed within parent's prototype, because `this._` will refer to child's private access function. Here's what I mean,\n\n```javascript\n// Note: this Gist is to show a problem with accessor pattern\n// and inheritance. Do not use!\n\nvar private = function(key) {\n    var obj = {};\n    return function(testkey) {\n        if(key === testkey) return obj;\n        console.error('Cannot access private properties');\n        return undefined;\n    };\n};\n\nvar ParentClass = function() {\n    var key = {};\n    var ParentClass = function() {\n        this._ = private(key);\n        this._(key).priv_prop = 100;\n    };\n    ParentClass.prototype.parent_test = function() {\n        console.log(this._(key).priv_prop);\n    };\n    return ParentClass;\n}();\n\nvar ChildClass = function() {\n    var key = {};\n    var ChildClass = function() {\n        ParentClass.call(this);\n        this._ = private(key);\n        this._(key).priv_prop = 200;\n    };\n    ChildClass.prototype = Object.create(\n        ParentClass.prototype\n    );\n    ChildClass.prototype.test = function() {\n        console.log(this._(key).priv_prop);\n    };\n    return ChildClass;\n}();\n\nvar instance = new ChildClass();\ninstance.test(); // `200` is correctly logged\ninstance.parent_test(); // ERROR! (expected result: `100`)\n```\n\nWhen `instance.parent_test` is called, `this._` inside it will refer to the child's private access function, hence, the `key` will mismatch and the error will be logged. However, this problem can be quite easily solved.\n\n## The final solution\n\nThe best solution is to namespace and make sure that parent and child have different property names for their private access functions. Here's the final solution:\n\n```javascript\n/* Here's how you can create truly private\n   properties in JS and use them on prototype */\n\n// Creates private storage, secures with a key, and\n// returns a private access function\nvar private = function(key) {\n    var obj = {};\n    return function(testkey) {\n        if(key === testkey) return obj;\n        console.error('Cannot access private properties');\n        return undefined;\n    };\n};\n\n// Create closure\nvar ParentClass = function() {\n    var priv = '_ParentClass' + Math.random(); // Namespace\n    var key = {}; // Create key withing closure\n    var ParentClass = function() {\n        this[priv] = private(key); // Create private storage\n        this[priv](key).priv_prop = 100; // Modify any private data\n    };\n    ParentClass.prototype.parent_test = function() {\n        console.log(this[priv](key).priv_prop); // Access private data\n    };\n    return ParentClass;\n}();\n\nvar ChildClass = function() {\n    var priv = '_ChildClass' + Math.random();\n    var key = {};\n    var ChildClass = function() {\n        ParentClass.call(this);\n        this[priv] = private(key);\n        this[priv](key).priv_prop = 200;\n    };\n    ChildClass.prototype = Object.create(\n        ParentClass.prototype\n    );\n    ChildClass.prototype.test = function() {\n        console.log(this[priv](key).priv_prop);\n    };\n    return ChildClass;\n}();\n\nvar instance = new ChildClass();\ninstance.test(); // `200` logged, as expected\ninstance.parent_test(); // `100` logged, as expected\n\n// Yet, there's no way to access the property from outside of the closure\n```\n\nPretty much the only difference from the previous code snippet is that we replaced `this._` for both child and parent classes with `this[priv]`, where `priv` is namespaced and randomly generated to ensure that private access function is stored under a different property name for child and parent.\n\nAnother recommendation I can make is that you should probably secure `this[priv]` by making it non-configurable, non-enumerable and read-only:\n\n```javascript\nObject.defineProperty(this, priv, {\n    value: private(key)\n})\n```\n\nInstead of just\n\n```javascript\nthis[priv] = private(key)\n```\n\nThis will make sure that user will not be able to remove or modify `this[priv]`, which is crucial for correct private storage functioning.\n\n## Conclusion\n\nGo ahead and use **accessor pattern**! It allows you to create truly encapsulated properties and use them on a prototype. Let others know about this method so we don't continue the misconception that privacy is impossible to achieve in JavaScript. Sharing this article will also help **😊**")}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWl0YXJpbm8uZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvTWFya2Rvd24udHN4Iiwid2VicGFjazovL2d1aXRhcmluby5naXRodWIuaW8vLi9zcmMvcGFnZXMvQWNjZXNzb3JQYXR0ZXJuLnRzeCIsIndlYnBhY2s6Ly9ndWl0YXJpbm8uZ2l0aHViLmlvLy4vY29udGVudC9BY2Nlc3NvclBhdHRlcm4ubWQiXSwibmFtZXMiOlsiTWFya2Rvd24iLCJwcm9wcyIsImNsYXNzIiwib3B0aW9ucyIsIm92ZXJyaWRlcyIsImEiLCJMaW5rIiwicHJlIiwiRnJhZ21lbnQiLCJjb2RlIiwibGFuZ3VhZ2UiLCJyZXBsYWNlIiwic3R5bGUiLCJtb25va2FpU3VibGltZSIsInRpdGxlIiwibWVudSIsIkFjY2Vzc29yUGF0dGVybiJdLCJtYXBwaW5ncyI6InVQQU1lLFNBQVNBLEVBQVNDLEdBQ2hDLE9BQU8sT0FBQyxJQUFELE9BQXFCQSxFQUFyQixDQUE0QkMsTUFBQSxtQkFBbUJELEVBQUssT0FBTCxJQUFxQkUsUUFBUyxDQUNuRkMsVUFBVyxDQUNWQyxFQUFHQyxJQUNIQyxJQUFLQyxLQUNMQyxLQUFNLFNBQUFSLEdBQ0wsSUFBTVMsRUFBV1QsRUFBSyxPQUFVQSxFQUFLLE1BQU9VLFFBQVEsU0FBVSxJQUM5RCxPQUFJRCxHQUNJLE9BQUMsSUFBRCxPQUNGVCxFQURFLENBRU5TLFNBQVVBLEVBQ1ZFLE1BQU9DLFFBSUQsY0FBVVosU0NqQmYsSUFBTWEsRUFBUSw2REFFUkMsRUFBTyxPQUVMLFNBQVNDLEVBQWdCZixHQUN2QyxPQUFPLE9BQUNELEVBQUQsQ0FBVUUsTUFBQSwwQkFBMEJELEVBQUssT0FBTCxLQ1Q1QyIsImZpbGUiOiI5MjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgaCB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgTWFya2Rvd25MaWJyYXJ5IGZyb20gJ21hcmtkb3duLXRvLWpzeCc7XG5pbXBvcnQgTGluayBmcm9tICdAY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInO1xuaW1wb3J0IHsgbW9ub2thaVN1YmxpbWUgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9lc20vc3R5bGVzL2hsanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXJrZG93bihwcm9wczogYW55KSB7XG5cdHJldHVybiA8TWFya2Rvd25MaWJyYXJ5IHsuLi5wcm9wc30gY2xhc3M9e2BNYXJrZG93biAke3Byb3BzLmNsYXNzIHx8IGBgfWB9IG9wdGlvbnM9e3tcblx0XHRvdmVycmlkZXM6IHtcblx0XHRcdGE6IExpbmssXG5cdFx0XHRwcmU6IEZyYWdtZW50LFxuXHRcdFx0Y29kZTogcHJvcHMgPT4ge1xuXHRcdFx0XHRjb25zdCBsYW5ndWFnZSA9IHByb3BzLmNsYXNzICYmIHByb3BzLmNsYXNzLnJlcGxhY2UoL15sYW5nLS8sICcnKTtcblx0XHRcdFx0aWYgKGxhbmd1YWdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxTeW50YXhIaWdobGlnaHRlclxuXHRcdFx0XHRcdFx0ey4uLnByb3BzfVxuXHRcdFx0XHRcdFx0bGFuZ3VhZ2U9e2xhbmd1YWdlfVxuXHRcdFx0XHRcdFx0c3R5bGU9e21vbm9rYWlTdWJsaW1lfVxuXHRcdFx0XHRcdC8+O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiA8Y29kZSB7Li4ucHJvcHN9IC8+O1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH19IC8+O1xufSIsImltcG9ydCBNYXJrZG93biBmcm9tICdAY29tcG9uZW50cy9NYXJrZG93bic7XG5pbXBvcnQgeyBoIH0gZnJvbSAncHJlYWN0JztcbmltcG9ydCBjb250ZW50IGZyb20gJ0Bjb250ZW50L0FjY2Vzc29yUGF0dGVybi5tZCc7XG5cbmV4cG9ydCBjb25zdCB0aXRsZSA9ICdZb3UgQ2FuIENyZWF0ZSBQcml2YXRlIFByb3BlcnRpZXMgSW4gSlMgLSBLaXJpbGwgU2hlc3Rha292JztcblxuZXhwb3J0IGNvbnN0IG1lbnUgPSAnYmxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY2Vzc29yUGF0dGVybihwcm9wczogeyBjbGFzcz86IHN0cmluZyB9KSB7XG5cdHJldHVybiA8TWFya2Rvd24gY2xhc3M9e2BBY2Nlc3NvclBhdHRlcm4gJHtwcm9wcy5jbGFzcyB8fCBgYH1gfT5cblx0XHR7Y29udGVudH1cblx0PC9NYXJrZG93bj47XG59IiwiZXhwb3J0IGRlZmF1bHQgXCIjIFlvdSBDYW4gQ3JlYXRlIFByaXZhdGUgUHJvcGVydGllcyBJbiBKU1xcblxcbkl0J3MgdmVyeSBbY29tbW9uXShodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MzYxMjAvamF2YXNjcmlwdC1hY2Nlc3NpbmctcHJpdmF0ZS1tZW1iZXItdmFyaWFibGVzLWZyb20tcHJvdG90eXBlLWRlZmluZWQtZnVuY3Rpb25zLzQzNjE0NyM0MzYxNDcpIGZvciBKYXZhU2NyaXB0IGRldmVsb3BlcnMgdG8gY2xhaW0gdGhhdCBpdCdzIGltcG9zc2libGUgdG8gY3JlYXRlIHRydWx5IGVuY2Fwc3VsYXRlZCBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9uIGFuIG9iamVjdCAqKmFuZCB1c2UgdGhlbSBvbiBpdHMgcHJvdG90eXBlKiouXFxuXFxuSW4gRVM2LCB0aGVyZSBhcmUgYSBmZXcgd2F5cyBvZiBlYXNpbHkgYWNoaWV2aW5nIHByaXZhdGUgcHJvcGVydGllcyB3aXRob3V0IG1lbW9yeSBsZWFrcy4gRm9yIGV4YW1wbGUsIHlvdSBjb3VsZCB1c2UgYSBFUzYgKipTeW1ib2wqKjpcXG5cXG5gYGBqYXZhc2NyaXB0XFxuLy8gQ2xvc3VyZVxcbnZhciBTb21lQ2xhc3MgPSBmdW5jdGlvbigpIHtcXG4gICAgdmFyIHByaXZfcHJvcCA9IFN5bWJvbCgpO1xcbiAgICB2YXIgU29tZUNsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICB0aGlzW3ByaXZfcHJvcF0gPSAyMDA7XFxuICAgIH07XFxuICAgIFNvbWVDbGFzcy5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgY29uc29sZS5sb2codGhpc1twcml2X3Byb3BdKTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIFNvbWVDbGFzcztcXG59KCk7XFxudmFyIGluc3RhbmNlID0gbmV3IFNvbWVDbGFzcygpO1xcbmluc3RhbmNlLnRlc3QoKTsgLy8gYDIwMGAgbG9nZ2VkXFxuYGBgXFxuXFxuQWx0ZXJuYXRpdmVseSwgeW91IGNvdWxkIHVzZSBhICoqV2Vha01hcCoqOlxcblxcbmBgYGphdmFzY3JpcHRcXG4vLyBDbG9zdXJlXFxudmFyIFNvbWVDbGFzcyA9IGZ1bmN0aW9uKCkge1xcbiAgICB2YXIgcHJpdl9wcm9wMSA9IG5ldyBXZWFrTWFwKCk7XFxuICAgIHZhciBwcml2X3Byb3AyID0gbmV3IFdlYWtNYXAoKTtcXG4gICAgdmFyIFNvbWVDbGFzcyA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgcHJpdl9wcm9wMS5zZXQodGhpcywgMTAwKTtcXG4gICAgICAgIHByaXZfcHJvcDIuc2V0KHRoaXMsIDIwMCk7XFxuICAgIH07XFxuICAgIFNvbWVDbGFzcy5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgY29uc29sZS5sb2cocHJpdl9wcm9wMS5nZXQodGhpcykpO1xcbiAgICAgICAgY29uc29sZS5sb2cocHJpdl9wcm9wMi5nZXQodGhpcykpO1xcbiAgICB9O1xcbiAgICByZXR1cm4gU29tZUNsYXNzO1xcbn0oKTtcXG52YXIgaW5zdGFuY2UgPSBuZXcgU29tZUNsYXNzKCk7XFxuaW5zdGFuY2UudGVzdCgpOyAvLyBgMTAwYCBhbmQgYDIwMGAgbG9nZ2VkXFxuYGBgXFxuXFxuVGhlIHByb2JsZW0gd2l0aCB0aGUgKipTeW1ib2wqKiBtZXRob2QgaXMgdGhhdCB5b3UgY2FuIHN0aWxsIGFjY2VzcyB0aG9zZSBwcm9wZXJ0aWVzIHVzaW5nIGBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzYC4gSW4gZWl0aGVyIGNhc2UsIHlvdSB3b3VsZCBsaWtlbHkgaGF2ZSB0byBpbmNsdWRlIGJ1bGt5IHBvbHlmaWxscyBpbiBwcm9kdWN0aW9uIGNvZGUuXFxuXFxuUHJpb3IgdG8gRVM2LCB0aGVyZSB3YXMgbm8gKm9idmlvdXMqIHdheSB0byBjcmVhdGUgcHJpdmF0ZSBwcm9wZXJ0aWVzIHVzYWJsZSBvbiBwcm90b3R5cGUuIFRoZSBjbGFpbSBpcyB0aGF0IHlvdSBlaXRoZXIgaGF2ZSB0byBhYmFuZG9uIHRoZSBpZGVhIG9yIHVzZSBhIG1lbW9yeSBsZWFreSAqKk1hcCoqIChhbHRlcm5hdGl2ZWx5LCB5b3UgY291bGQgdXNlIDIgYXJyYXlzKS4gQnV0IHdoYXQgaWYgSSB0b2xkIHlvdSB0aGF0IHRoZXJlIGlzIGFjdHVhbGx5IGEgd2F5IHRvIGRvIHRoaXMgdGhhdCBpcyBjcm9zcy1icm93c2VyLCBuZWVkcyBubyBwb2x5ZmlsbHMgb3IgRVM2LCBhbmQgZG9lc24ndCBwcm9kdWNlIG1lbW9yeSBsZWFrcz9cXG5cXG4jIyBUaGUgaWRlYVxcblxcbkkgaGF2ZW4ndCBzZWVuIHRoaXMgbWV0aG9kIHVzZWQgYnkgYW55b25lICgqKkVESVQqKjogaXQgd2FzIHBvaW50ZWQgb3V0IHRvIG1lIHRoYXQgSSB3YXNuJ3QgdGhlIGZpcnN0IG9uZSB0byBjb21lIHVwIHdpdGggdGhpcyBtZXRob2QuICoqW1JlYWQgbW9yZSBoZXJlXShodHRwczovL21lZGl1bS5jb20vZnJvbnQtZW5kLWhhY2tpbmcvYWNoaWV2aW5nLWNvbXBsZXRlLWRhdGEtZW5jYXBzdWxhdGlvbi1pbi1qYXZhc2NyaXB0LTU0NTRhNmI3NDEwYikqKiksIHNvIEknZCBsaWtlIHRvIGNhbGwgaXQgYW4gKiphY2Nlc3NvciBwYXR0ZXJuKiouIFRoZSBpZGVhIGlzIHRvIGNyZWF0ZSBhICpjbG9zdXJlKiwgY3JlYXRlIGEgKmtleSogaW5zaWRlIHRoZSBjbG9zdXJlIGFuZCBjcmVhdGUgYSAqc3RvcmFnZSBmb3IgcHJpdmF0ZSBwcm9wZXJ0aWVzKiB0aGF0IGNhbiBvbmx5IGJlIGFjY2Vzc2VkIGlmIHRoZSBjb3JyZWN0IGtleSBpcyBwcm92aWRlZC4gSGVyZSdzIGhvdyB5b3Ugd291bGQgaW1wbGVtZW50IGl0OlxcblxcbmBgYGphdmFzY3JpcHRcXG4vKiBIZXJlJ3MgaG93IHlvdSBjYW4gY3JlYXRlIHRydWx5IHByaXZhdGVcXG4gICBwcm9wZXJ0aWVzIGluIEpTIGFuZCB1c2UgdGhlbSBvbiBwcm90b3R5cGUgKi9cXG5cXG4vLyBDbG9zdXJlXFxudmFyIFNvbWVDbGFzcyA9IGZ1bmN0aW9uKCkge1xcbiAgICB2YXIga2V5ID0ge307XFxuXFxuICAgIHZhciBwcml2YXRlID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICB2YXIgb2JqID0ge307XFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24odGVzdGtleSkge1xcbiAgICAgICAgICAgIGlmKGtleSA9PT0gdGVzdGtleSkgcmV0dXJuIG9iajtcXG4gICAgICAgICAgICAvLyBJZiB0aGUgdXNlciBvZiB0aGUgY2xhc3MgdHJpZXMgdG8gYWNjZXNzIHByaXZhdGVcXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzLCB0aGV5IHdvbid0IGhhdmUgdGhlIGFjY2VzcyB0byB0aGUgYGtleWBcXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgYWNjZXNzIHByaXZhdGUgcHJvcGVydGllcycpO1xcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XFxuICAgICAgICB9O1xcbiAgICB9O1xcblxcbiAgICB2YXIgU29tZUNsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICB0aGlzLl8gPSBwcml2YXRlKCk7IC8vIENyZWF0ZXMgYSBwcml2YXRlIG9iamVjdFxcbiAgICAgICAgdGhpcy5fKGtleSkucHJpdl9wcm9wID0gMjAwOyAvLyB0aGlzLl8oa2V5KSB3aWxsIHJldHVybiB0aGUgcHJpdmF0ZSBvYmplY3RcXG4gICAgfTtcXG5cXG4gICAgU29tZUNsYXNzLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl8oa2V5KS5wcml2X3Byb3ApOyAvLyBVc2luZyBwcm9wZXJ0eSBmcm9tIHByb3RvdHlwZVxcbiAgICB9O1xcblxcbiAgICByZXR1cm4gU29tZUNsYXNzO1xcbn0oKTtcXG5cXG52YXIgaW5zdGFuY2UgPSBuZXcgU29tZUNsYXNzKCk7XFxuaW5zdGFuY2UudGVzdCgpOyAvLyBgMjAwYCBsb2dnZWRcXG5cXG52YXIgd3Jvbmdfa2V5ID0ge307XFxuaW5zdGFuY2UuXyh3cm9uZ19rZXkpOyAvLyB1bmRlZmluZWQ7IGVycm9yIGxvZ2dlZFxcbmBgYFxcblxcblByZXR0eSBzaW1wbGUsIGh1aD8gYHByaXZhdGVgIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlICpwcml2YXRlIHN0b3JhZ2UqIGFuZCByZXR1cm5zIGEgcHJpdmF0ZSBhY2Nlc3MgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgcmV0dXJuIHRoZSAqc3RvcmFnZSogaWYgdGhlIGNvcnJlY3QgKmtleSogaXMgcHJvdmlkZWQuIFRoZW4sIGluIGNvbnN0cnVjdG9yLCB3ZSBhc3NpZ24gdGhpcyBwcml2YXRlIGFjY2VzcyBmdW5jdGlvbiB0byBgdGhpcy5fYCB3aGljaCBjYW4gYmUgZWFzaWx5IHVzZWQgb24gdGhlIHByb3RvdHlwZSwgcHJvdmlkZWQgdGhhdCB0aGUgcHJvdG90eXBlIHByb3BlcnRpZXMgYWxzbyBoYXZlIGFjY2VzcyB0byB0aGUgKmtleSouIEJhc2ljYWxseSwgdGhlcmUgaXMgbm8gd2F5IHRvIGFjY2VzcyB0aGUgKnByaXZhdGUgc3RvcmFnZSogd2l0aG91dCBoYXZpbmcgdGhlIGNvcnJlY3QgKmtleSouIEhlbmNlLCBpZiB0aGUgdXNlciB0cmllcyB0byBjYWxsIGB0aGlzLl9gIHdpdGggYW55IGFyZ3VtZW50LCBtYXliZSB3aXRoIGEgYHdyb25nX2tleWAsIHRoZW4gdGhlIGF0dGVtcHQgd2lsbCBmYWlsLCBlcnJvciB3aWxsIGJlIGxvZ2dlZCwgYW5kIGFsbCB0aGUgdXNlciB3aWxsIGdldCBpcyB1bmRlZmluZWQuXFxuXFxuQWR2YW50YWdlcyBvZiB0aGlzIG1ldGhvZDpcXG5cXG4qIEl0J3MgcXVpdGUgc2ltcGxlLiBBbGwgeW91IG5lZWQgaXMgdG8gY3JlYXRlIGEgKnByaXZhdGUgc3RvcmFnZSosIGFuZCB5b3UgY2FuIGFjY2VzcyBhbGwgcHJpdmF0ZSBwcm9wZXJ0aWVzIGlubGluZSB3aXRoaW4gYSBjb25zdHJ1Y3RvciAvIHByb3RvdHlwZS5cXG4qIEl0IGxldHMgeW91IGNyZWF0ZSB0cnVseSBwcml2YXRlIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgYWNjZXNzZWQgZnJvbSB0aGUgcHJvdG90eXBlLiBUaGUgdXNlciBvZiB0aGUgY2xhc3Mgd2lsbCBub3QgYmUgYWJsZSB0byBhY2Nlc3MgdGhlbS5cXG5cXG5EaXNhZHZhbnRhZ2Ugb2YgdGhpcyBtZXRob2Q6XFxuXFxuKiBJdCBzbGlnaHRseSBwb2xsdXRlcyB0aGUgbmFtZXNwYWNlLCBiZWNhdXNlIHlvdSBoYXZlIHRvIGFzc2lnbiB0aGUgcHJpdmF0ZSBzdG9yYWdlIHRvIGB0aGlzLl9gIG9yIGFsaWtlLCBidXQgdGhlcmUncyBwcm9iYWJseSBubyBvdGhlciB3YXkgdG8gZG8gdGhpcy5cXG5cXG4jIyBBIHByb2JsZW1cXG5cXG5BIG1pbm9yIHByb2JsZW0gd2l0aCB0aGlzIG1ldGhvZCBpcyB0aGF0LCBpbiBjYXNlIG9mIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UsIGlmIGJvdGggY2hpbGQgYW5kIHBhcmVudCB1c2UgdGhlIHNhbWUgcHJvcGVydHkgbmFtZSBmb3IgdGhlIHByaXZhdGUgYWNjZXNzIGZ1bmN0aW9uIChpbiB0aGlzIGV4YW1wbGUsIGB0aGlzLl9gKSwgdGhlbiB0aGUgcGFyZW50J3MgcHJpdmF0ZSBwcm9wZXJ0aWVzIGNhbm5vdCBiZSBhY2Nlc3NlZCB3aXRoaW4gcGFyZW50J3MgcHJvdG90eXBlLCBiZWNhdXNlIGB0aGlzLl9gIHdpbGwgcmVmZXIgdG8gY2hpbGQncyBwcml2YXRlIGFjY2VzcyBmdW5jdGlvbi4gSGVyZSdzIHdoYXQgSSBtZWFuLFxcblxcbmBgYGphdmFzY3JpcHRcXG4vLyBOb3RlOiB0aGlzIEdpc3QgaXMgdG8gc2hvdyBhIHByb2JsZW0gd2l0aCBhY2Nlc3NvciBwYXR0ZXJuXFxuLy8gYW5kIGluaGVyaXRhbmNlLiBEbyBub3QgdXNlIVxcblxcbnZhciBwcml2YXRlID0gZnVuY3Rpb24oa2V5KSB7XFxuICAgIHZhciBvYmogPSB7fTtcXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRlc3RrZXkpIHtcXG4gICAgICAgIGlmKGtleSA9PT0gdGVzdGtleSkgcmV0dXJuIG9iajtcXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBhY2Nlc3MgcHJpdmF0ZSBwcm9wZXJ0aWVzJyk7XFxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xcbiAgICB9O1xcbn07XFxuXFxudmFyIFBhcmVudENsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgIHZhciBrZXkgPSB7fTtcXG4gICAgdmFyIFBhcmVudENsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICB0aGlzLl8gPSBwcml2YXRlKGtleSk7XFxuICAgICAgICB0aGlzLl8oa2V5KS5wcml2X3Byb3AgPSAxMDA7XFxuICAgIH07XFxuICAgIFBhcmVudENsYXNzLnByb3RvdHlwZS5wYXJlbnRfdGVzdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fKGtleSkucHJpdl9wcm9wKTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIFBhcmVudENsYXNzO1xcbn0oKTtcXG5cXG52YXIgQ2hpbGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xcbiAgICB2YXIga2V5ID0ge307XFxuICAgIHZhciBDaGlsZENsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICBQYXJlbnRDbGFzcy5jYWxsKHRoaXMpO1xcbiAgICAgICAgdGhpcy5fID0gcHJpdmF0ZShrZXkpO1xcbiAgICAgICAgdGhpcy5fKGtleSkucHJpdl9wcm9wID0gMjAwO1xcbiAgICB9O1xcbiAgICBDaGlsZENsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXFxuICAgICAgICBQYXJlbnRDbGFzcy5wcm90b3R5cGVcXG4gICAgKTtcXG4gICAgQ2hpbGRDbGFzcy5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fKGtleSkucHJpdl9wcm9wKTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIENoaWxkQ2xhc3M7XFxufSgpO1xcblxcbnZhciBpbnN0YW5jZSA9IG5ldyBDaGlsZENsYXNzKCk7XFxuaW5zdGFuY2UudGVzdCgpOyAvLyBgMjAwYCBpcyBjb3JyZWN0bHkgbG9nZ2VkXFxuaW5zdGFuY2UucGFyZW50X3Rlc3QoKTsgLy8gRVJST1IhIChleHBlY3RlZCByZXN1bHQ6IGAxMDBgKVxcbmBgYFxcblxcbldoZW4gYGluc3RhbmNlLnBhcmVudF90ZXN0YCBpcyBjYWxsZWQsIGB0aGlzLl9gIGluc2lkZSBpdCB3aWxsIHJlZmVyIHRvIHRoZSBjaGlsZCdzIHByaXZhdGUgYWNjZXNzIGZ1bmN0aW9uLCBoZW5jZSwgdGhlIGBrZXlgIHdpbGwgbWlzbWF0Y2ggYW5kIHRoZSBlcnJvciB3aWxsIGJlIGxvZ2dlZC4gSG93ZXZlciwgdGhpcyBwcm9ibGVtIGNhbiBiZSBxdWl0ZSBlYXNpbHkgc29sdmVkLlxcblxcbiMjIFRoZSBmaW5hbCBzb2x1dGlvblxcblxcblRoZSBiZXN0IHNvbHV0aW9uIGlzIHRvIG5hbWVzcGFjZSBhbmQgbWFrZSBzdXJlIHRoYXQgcGFyZW50IGFuZCBjaGlsZCBoYXZlIGRpZmZlcmVudCBwcm9wZXJ0eSBuYW1lcyBmb3IgdGhlaXIgcHJpdmF0ZSBhY2Nlc3MgZnVuY3Rpb25zLiBIZXJlJ3MgdGhlIGZpbmFsIHNvbHV0aW9uOlxcblxcbmBgYGphdmFzY3JpcHRcXG4vKiBIZXJlJ3MgaG93IHlvdSBjYW4gY3JlYXRlIHRydWx5IHByaXZhdGVcXG4gICBwcm9wZXJ0aWVzIGluIEpTIGFuZCB1c2UgdGhlbSBvbiBwcm90b3R5cGUgKi9cXG5cXG4vLyBDcmVhdGVzIHByaXZhdGUgc3RvcmFnZSwgc2VjdXJlcyB3aXRoIGEga2V5LCBhbmRcXG4vLyByZXR1cm5zIGEgcHJpdmF0ZSBhY2Nlc3MgZnVuY3Rpb25cXG52YXIgcHJpdmF0ZSA9IGZ1bmN0aW9uKGtleSkge1xcbiAgICB2YXIgb2JqID0ge307XFxuICAgIHJldHVybiBmdW5jdGlvbih0ZXN0a2V5KSB7XFxuICAgICAgICBpZihrZXkgPT09IHRlc3RrZXkpIHJldHVybiBvYmo7XFxuICAgICAgICBjb25zb2xlLmVycm9yKCdDYW5ub3QgYWNjZXNzIHByaXZhdGUgcHJvcGVydGllcycpO1xcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcXG4gICAgfTtcXG59O1xcblxcbi8vIENyZWF0ZSBjbG9zdXJlXFxudmFyIFBhcmVudENsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgIHZhciBwcml2ID0gJ19QYXJlbnRDbGFzcycgKyBNYXRoLnJhbmRvbSgpOyAvLyBOYW1lc3BhY2VcXG4gICAgdmFyIGtleSA9IHt9OyAvLyBDcmVhdGUga2V5IHdpdGhpbmcgY2xvc3VyZVxcbiAgICB2YXIgUGFyZW50Q2xhc3MgPSBmdW5jdGlvbigpIHtcXG4gICAgICAgIHRoaXNbcHJpdl0gPSBwcml2YXRlKGtleSk7IC8vIENyZWF0ZSBwcml2YXRlIHN0b3JhZ2VcXG4gICAgICAgIHRoaXNbcHJpdl0oa2V5KS5wcml2X3Byb3AgPSAxMDA7IC8vIE1vZGlmeSBhbnkgcHJpdmF0ZSBkYXRhXFxuICAgIH07XFxuICAgIFBhcmVudENsYXNzLnByb3RvdHlwZS5wYXJlbnRfdGVzdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgY29uc29sZS5sb2codGhpc1twcml2XShrZXkpLnByaXZfcHJvcCk7IC8vIEFjY2VzcyBwcml2YXRlIGRhdGFcXG4gICAgfTtcXG4gICAgcmV0dXJuIFBhcmVudENsYXNzO1xcbn0oKTtcXG5cXG52YXIgQ2hpbGRDbGFzcyA9IGZ1bmN0aW9uKCkge1xcbiAgICB2YXIgcHJpdiA9ICdfQ2hpbGRDbGFzcycgKyBNYXRoLnJhbmRvbSgpO1xcbiAgICB2YXIga2V5ID0ge307XFxuICAgIHZhciBDaGlsZENsYXNzID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICBQYXJlbnRDbGFzcy5jYWxsKHRoaXMpO1xcbiAgICAgICAgdGhpc1twcml2XSA9IHByaXZhdGUoa2V5KTtcXG4gICAgICAgIHRoaXNbcHJpdl0oa2V5KS5wcml2X3Byb3AgPSAyMDA7XFxuICAgIH07XFxuICAgIENoaWxkQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcXG4gICAgICAgIFBhcmVudENsYXNzLnByb3RvdHlwZVxcbiAgICApO1xcbiAgICBDaGlsZENsYXNzLnByb3RvdHlwZS50ZXN0ID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzW3ByaXZdKGtleSkucHJpdl9wcm9wKTtcXG4gICAgfTtcXG4gICAgcmV0dXJuIENoaWxkQ2xhc3M7XFxufSgpO1xcblxcbnZhciBpbnN0YW5jZSA9IG5ldyBDaGlsZENsYXNzKCk7XFxuaW5zdGFuY2UudGVzdCgpOyAvLyBgMjAwYCBsb2dnZWQsIGFzIGV4cGVjdGVkXFxuaW5zdGFuY2UucGFyZW50X3Rlc3QoKTsgLy8gYDEwMGAgbG9nZ2VkLCBhcyBleHBlY3RlZFxcblxcbi8vIFlldCwgdGhlcmUncyBubyB3YXkgdG8gYWNjZXNzIHRoZSBwcm9wZXJ0eSBmcm9tIG91dHNpZGUgb2YgdGhlIGNsb3N1cmVcXG5gYGBcXG5cXG5QcmV0dHkgbXVjaCB0aGUgb25seSBkaWZmZXJlbmNlIGZyb20gdGhlIHByZXZpb3VzIGNvZGUgc25pcHBldCBpcyB0aGF0IHdlIHJlcGxhY2VkIGB0aGlzLl9gIGZvciBib3RoIGNoaWxkIGFuZCBwYXJlbnQgY2xhc3NlcyB3aXRoIGB0aGlzW3ByaXZdYCwgd2hlcmUgYHByaXZgIGlzIG5hbWVzcGFjZWQgYW5kIHJhbmRvbWx5IGdlbmVyYXRlZCB0byBlbnN1cmUgdGhhdCBwcml2YXRlIGFjY2VzcyBmdW5jdGlvbiBpcyBzdG9yZWQgdW5kZXIgYSBkaWZmZXJlbnQgcHJvcGVydHkgbmFtZSBmb3IgY2hpbGQgYW5kIHBhcmVudC5cXG5cXG5Bbm90aGVyIHJlY29tbWVuZGF0aW9uIEkgY2FuIG1ha2UgaXMgdGhhdCB5b3Ugc2hvdWxkIHByb2JhYmx5IHNlY3VyZSBgdGhpc1twcml2XWAgYnkgbWFraW5nIGl0IG5vbi1jb25maWd1cmFibGUsIG5vbi1lbnVtZXJhYmxlIGFuZCByZWFkLW9ubHk6XFxuXFxuYGBgamF2YXNjcmlwdFxcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBwcml2LCB7XFxuICAgIHZhbHVlOiBwcml2YXRlKGtleSlcXG59KVxcbmBgYFxcblxcbkluc3RlYWQgb2YganVzdFxcblxcbmBgYGphdmFzY3JpcHRcXG50aGlzW3ByaXZdID0gcHJpdmF0ZShrZXkpXFxuYGBgXFxuXFxuVGhpcyB3aWxsIG1ha2Ugc3VyZSB0aGF0IHVzZXIgd2lsbCBub3QgYmUgYWJsZSB0byByZW1vdmUgb3IgbW9kaWZ5IGB0aGlzW3ByaXZdYCwgd2hpY2ggaXMgY3J1Y2lhbCBmb3IgY29ycmVjdCBwcml2YXRlIHN0b3JhZ2UgZnVuY3Rpb25pbmcuXFxuXFxuIyMgQ29uY2x1c2lvblxcblxcbkdvIGFoZWFkIGFuZCB1c2UgKiphY2Nlc3NvciBwYXR0ZXJuKiohIEl0IGFsbG93cyB5b3UgdG8gY3JlYXRlIHRydWx5IGVuY2Fwc3VsYXRlZCBwcm9wZXJ0aWVzIGFuZCB1c2UgdGhlbSBvbiBhIHByb3RvdHlwZS4gTGV0IG90aGVycyBrbm93IGFib3V0IHRoaXMgbWV0aG9kIHNvIHdlIGRvbid0IGNvbnRpbnVlIHRoZSBtaXNjb25jZXB0aW9uIHRoYXQgcHJpdmFjeSBpcyBpbXBvc3NpYmxlIHRvIGFjaGlldmUgaW4gSmF2YVNjcmlwdC4gU2hhcmluZyB0aGlzIGFydGljbGUgd2lsbCBhbHNvIGhlbHAgKirwn5iKKipcIjsiXSwic291cmNlUm9vdCI6IiJ9