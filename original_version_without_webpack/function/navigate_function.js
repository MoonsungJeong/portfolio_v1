function _NAVIGATION(){     // originally part of 'app.js'
    var onNavigate = function(pathname){
        var appDiv = document.getElementById('app');
        window.history.pushState(
            {},
            pathname,
            window.location.origin + pathname
        )
        appDiv.innerHTML = routes[pathname]     // 'routes' is from 'app.js'
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