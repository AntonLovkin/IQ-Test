function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatories'
        }
        this.constructor(routes);
    } catch (error) {
        console.error(error)
    }
};

Router.prototype = {
    routes: undefined,
    rootElem: undefined,

    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = rootElem;
    },

    init: function () {
        var r = this.routes;
        (function (scope, r) {
            window.addEventListener('hashchange', function (evt) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },

    hasChanged: function (scope, r) {
        if (window.location.hash.length > 0) {
            for (let i = 0; i < r.length; i++) {
                let route = r[i];
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }                
            }
        } else {
            for (let i = 0; i < r.length; i++) {
                let route = r[i];
                if (route.default) {
                    scope.goToRoute(route.htmlName);
                }                
            }            
        }
    },
    
    goToRoute: function (htmlName) {
        (function (scope) {
            let url = 'views/' + htmlName;
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);      
    }
}