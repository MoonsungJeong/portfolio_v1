function _CLASS_CHECK_ADD_REMOVE(elementName, className){
    var bool = elementName.classList.contains(className);
    if(!bool){
        elementName.classList.add(className);
        return;
    }
    elementName.classList.remove(className);
    return;
}
// header.js -> menu-button
function _HEADER_BUTTON_TO_POPUP_MENU(){
    var menu_btn = document.querySelector(".menu-button");
    if(menu_btn){
        menu_btn.addEventListener("click",function(){
            var el_1 = document.querySelector(".nav-container");
            var el_2 = document.querySelector(".nav-menu");
            var el_3 = document.querySelector(".menu-button");
            _CLASS_CHECK_ADD_REMOVE(el_1,"open");
            _CLASS_CHECK_ADD_REMOVE(el_2,"open");
            _CLASS_CHECK_ADD_REMOVE(el_3,"open");
        });
    }
}
// header.js -> nav-menu -> drop-btn
function _DROP_BUTTON_TO_SHOW_EXTRA_MENU(){
    var drop_btn = document.querySelector(".drop-btn");
    if(drop_btn){
        drop_btn.addEventListener("mouseover",function(){
            var el = document.querySelector(".drop-menu");
            _CLASS_CHECK_ADD_REMOVE(el,"open");
        });
        drop_btn.addEventListener("mouseout",function(){
            var el = document.querySelector(".drop-menu");
            _CLASS_CHECK_ADD_REMOVE(el,"open");
        });
    }
}
// header.js -> header-menu -> header-drop-btn
function _HEADER_DROP_BUTTON_TO_SHOW_EXTRA_MENU(){
    var header_drop_btn = document.querySelector(".header-drop-btn");
    if(header_drop_btn){
        header_drop_btn.addEventListener("mouseover",function(){
            var el = document.querySelector(".header-drop-menu");
            _CLASS_CHECK_ADD_REMOVE(el,"open");
        });
        header_drop_btn.addEventListener("mouseout",function(){
            var el = document.querySelector(".header-drop-menu");
            _CLASS_CHECK_ADD_REMOVE(el,"open");
        });
    }
}
// top_btn.js -> top-btn
function _SCROLL_TO_THE_TOP_BTN(){
    var mybtn = document.getElementById("top-btn");
    if(mybtn){
        window.onscroll = function(){
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                mybtn.style.display="block";
            }else{
                mybtn.style.display="none";
            }
        }
        mybtn.addEventListener("click", function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }
}
export  {_CLASS_CHECK_ADD_REMOVE, _HEADER_BUTTON_TO_POPUP_MENU, _DROP_BUTTON_TO_SHOW_EXTRA_MENU, _HEADER_DROP_BUTTON_TO_SHOW_EXTRA_MENU, _SCROLL_TO_THE_TOP_BTN};
