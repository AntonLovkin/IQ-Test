(function () {
    function init() {
        let router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html'),
            new Route('testing', 'testing.html')
        ])
    }
    init();
}());