import routes from "../path/routes";

function _NAVIGATION(){
    var onNavigate = function(pathname){
        var appDiv = document.getElementById('app');
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
        appDiv.innerHTML = routes[pathname]
    }
    
    var navFunc = document.querySelectorAll('.nav-func');
    navFunc.forEach(function(item){
        item.addEventListener('click',function(){
            if(item.innerText !== "Home"){
                onNavigate(`/${item.innerText}`);
            }else{
                onNavigate(`/`);
            }
            return false;
        })
    })
}
export default _NAVIGATION;