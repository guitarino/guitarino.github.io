if(!RouterAnchor) {
    console.error('RouterAnchor should be defined');
}
else {
    RouterAnchor.types['fade-child'] = function() {
        var
            fadeTimeout = 400, //ms
            selector = '[router-type="fade-child"] > *',
            addedStyles = (
                selector + '.router-next {' +
                    '-webkit-transition: opacity ' + fadeTimeout + 'ms ease-in-out;' +
                    'transition: opacity ' + fadeTimeout + 'ms ease-in-out;' +
                    'opacity: 0;' +
                '}' +
                selector + '.router-showing {' +
                    'will-change: opacity;' +
                    'opacity: 1;' +
                '}'
            ),
            getFirstElementChild = function(parent) {
                var node, nodes = parent.childNodes, i = 0;
                while (node = nodes[i++]) {
                    if (node.nodeType === 1) {
                        return node;
                    }
                }
                return null;
            }
        ;
        var style = document.createElement('style');
        style.innerHTML = addedStyles;
        document.head.appendChild(style);
        style = undefined;
        addedStyles = undefined;
        return {
            onContentChanged: function(element, new_element) {
                var firstElementChild = getFirstElementChild(element);
                var new_firstElementChild = getFirstElementChild(new_element);
                
                new_firstElementChild.classList.add('router-next');
                element.replaceChild(new_firstElementChild, firstElementChild);
                
                // Waiting for styles to get applied
                new_firstElementChild.clientWidth;

                new_firstElementChild.classList.add('router-showing');
                
                // Waiting for styles to get applied
                new_firstElementChild.clientWidth;

                window.setTimeout(function() {
                    new_firstElementChild.classList.remove('router-next');
                }, fadeTimeout);
            }
        };
    }();

    RouterAnchor.types['attribute-change'] = function() {
        var voidFunction = function() {};
        return {
            onContentChanged: voidFunction,
            onAdded: voidFunction,
            onRemoved: voidFunction
        };
    }();
}