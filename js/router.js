const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    // console.log(event.target.href)
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "/views/home.html",
    "/result": "/views/result-page.html",
    "/test": "/views/test.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes["/"];
    
    const html = await fetch(route).then((data) => data.text());
    // console.log("path-", path)
    // console.log("route-", route)
    // console.log("html-", html)
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();