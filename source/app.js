import routes from "../path/routes";
import css from "../css/style.css";

var appDiv = document.getElementById('app');
//appDiv.innerHTML = routes[window.location.pathname];
appDiv.innerHTML = routes['/'];

window.onpopstate = function(){
    var path = window.location.pathname;
    if(path === '/' || path === '/About' || path === '/Portfolio' || path === '/Contact' || path === '/Blog' || path === '/Cv'){
        appDiv.innerHTML = routes[window.location.pathname]
    }else{
        appDiv.innerHTML = routes['/'];
    }
}