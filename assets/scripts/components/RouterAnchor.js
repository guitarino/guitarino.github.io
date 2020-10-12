var RouterAnchor = function() {
    var currentHref;

    try {
        currentHref = document.querySelector('meta[name="routerAnchor:href"]').getAttribute('content');
    }
    catch(oops) {
        currentHref = window.location.pathname;
    }

    try {
        window.history.replaceState({routerHref: currentHref}, null);
    }
    catch(oops) { }

    var
        TAG_NAME = 'router-anchor',
        ROUTER_TYPE_ATTR = 'router-type',
        isInitialized = "_init" + Math.random(),
        attachedCallback = function() {
            if(this[isInitialized]) return;
            this[isInitialized] = true;
            this.addEventListener('click', onclick);
        },
        ajaxDocument = function(href, callback) {
            if(currentHref === href) return;
            var xhr = new XMLHttpRequest();
            xhr.onload = function() {
                if (this.status === 404) {
                    xhr.onerror();
                }
                try {
                    var new_document = this.responseXML;
                    diff(document, new_document);
                    if(callback) {
                        callback();
                    }
                    currentHref = href;
                }
                catch(oops) {
                    xhr.onerror();
                }
            };
            xhr.onerror = function() {
                console.error('Location is wrong');
                window.location.href = href;
            };
            xhr.open("GET", href);
            xhr.responseType = "document";
            xhr.send();
        },
        onclick = function(e) {
            e.preventDefault();
            var self = e.currentTarget;
            var href = self.getAttribute('href');
            ajaxDocument(href, function() {
                window.history.pushState({routerHref: href}, null, href);
            });
        },
        onpopstate = function(e) {
            if(e.state && e.state.routerHref) {
                ajaxDocument(e.state.routerHref);
            }
        },
        diff = function(document, new_document) {
            var fallbackCallbacks = RouterAnchor.types.basic;
            var routerElements = document.querySelectorAll('[' + ROUTER_TYPE_ATTR + ']');
            var new_routerElements = new_document.querySelectorAll('[' + ROUTER_TYPE_ATTR + ']');
            var elements = {};
            var new_elements = {};
            var element_ids = [];
            for(var i=0; i<routerElements.length; i++) {
                var element = routerElements[i];
                if( element.id ) {
                    elements[ element.id ] = element;
                    element_ids.push( element.id );
                }
            }
            for(var i=0; i<new_routerElements.length; i++) {
                var element = new_routerElements[i];
                if( element.id ) {
                    new_elements[ element.id ] = element;
                }
            }
            for(var id in elements) {
                var element = elements[id];
                var routerType = element.getAttribute( ROUTER_TYPE_ATTR );
                var routerCallbacks = RouterAnchor.types[ routerType ] || fallbackCallbacks;
                var new_element = new_elements[id];
                // Removed router-view
                if(!new_element) {
                    var onRemoved = routerCallbacks.onRemoved || fallbackCallbacks.onRemoved;
                    onRemoved( element );
                }
                // Modified router-view
                else {
                    // Content modified
                    if(element.innerHTML !== new_element.innerHTML) {
                        var onContentChanged = routerCallbacks.onContentChanged || fallbackCallbacks.onContentChanged;
                        // Unfortunately need to re-create elements in the document
                        // so that new router-anchors trigger attachedCallback
                        var parent = document.createElement('div');
                        parent.innerHTML = new_element.outerHTML;
                        onContentChanged( element, parent.firstChild );
                    }
                    
                    // Attributes changed
                    var attrNames = [];
                    var attributes = element.attributes;
                    var new_attributes = new_element.attributes;
                    for(var i=0; i<attributes.length; i++) {
                        var attribute = element.attributes[i];
                        var attrName = attribute.name;
                        var new_attribute = new_attributes[attrName];
                        attrNames.push(attrName);
                        // Removed attribute
                        if(!new_attribute || !new_attribute.specified) {
                            var onAttributeRemoved = routerCallbacks.onAttributeRemoved || fallbackCallbacks.onAttributeRemoved;
                            onAttributeRemoved(element, new_element, attrName);
                        }
                        // Modified attribute
                        else if(attribute.value !== new_attribute.value) {
                            var onAttributeChanged = routerCallbacks.onAttributeChanged || fallbackCallbacks.onAttributeChanged;
                            onAttributeChanged(element, new_element, attrName, new_attribute.value, attribute.value);
                        }
                    }
                    // Added attribute
                    for(var i=0; i<new_attributes.length; i++) {
                        var new_attribute = new_attributes[i];
                        var attrName = new_attribute.name;
                        if(!~attrNames.indexOf(attrName)) {
                            var onAttributeAdded = routerCallbacks.onAttributeAdded || fallbackCallbacks.onAttributeAdded;
                            onAttributeAdded(element, new_element, attrName, new_attribute.value);
                        }
                    }
                }
            }
            // Added router-view
            for(var id in new_elements) {
                var new_element = new_elements[id];
                var routerType = new_element.getAttribute( ROUTER_TYPE_ATTR );
                var routerCallbacks = RouterAnchor.types[ routerType ];
                if(!~element_ids.indexOf(id)) {
                    var onAdded = routerCallbacks.onAdded || fallbackCallbacks.onAdded;
                    onAdded( new_element );
                }
            }
        }
    ;

    window.addEventListener('popstate', onpopstate);

    var Router = function() {
        this.attachedCallback = attachedCallback;
    };
    
    Router.prototype = HTMLAnchorElement.prototype;
    
    var RouterAnchor = document.registerElement(TAG_NAME, {
        extends: 'a',
        prototype: new Router
    });

    RouterAnchor.types = {};
    RouterAnchor.types.basic = {
        onContentChanged: function(element, new_element) {
            while(element.firstChild) {
                element.removeChild(element.firstChild);
            }
            while(new_element.firstChild) {
                element.appendChild(new_element.firstChild);
            }
            console.log('onContentChanged');
        },
        onAttributeRemoved: function(element, new_element, attrName) {
            element.removeAttribute(attrName);
            console.log('onAttributeRemoved');
        },
        onAttributeChanged: function(element, new_element, attrName, val) {
            element.setAttribute(attrName, val);
            console.log('onAttributeChanged');
        },
        onAttributeAdded: function(element, new_element, attrName, val) {
            element.setAttribute(attrName, val);
            console.log('onAttributeAdded');
        },
        onRemoved: function(element) {
            try {
                element.parentNode.removeChild(element);
            }
            catch(e) {
                console.error(e);
            }
            console.log('onRemoved');
        },
        onAdded: function(new_element) {
            try {
                var id = new_element.parentNode.id;
                document.getElementById(id).appendChild(new_element);
            }
            catch(e) {
                console.error(e);
            }
            console.log('onAdded');
        }
    };
    
    return RouterAnchor;
}();