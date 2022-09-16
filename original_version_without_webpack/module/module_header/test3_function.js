function _CLASS_CHECK_ADD_REMOVE(elementName, className){
    var bool = elementName.classList.contains(className);
    if(!bool){
        elementName.classList.add(className);
        return;
    }
    elementName.classList.remove(className);
    return;
}
function _HEADER_BUTTON_TO_POPUP_MENU(){
    // header.js -> menu-button
    var menu_btn = document.querySelector(".menu-button");
    menu_btn.addEventListener("click",function(){
        var el_1 = document.querySelector(".nav-container");
        var el_2 = document.querySelector(".nav-menu");
        var el_3 = document.querySelector(".menu-button");
        _CLASS_CHECK_ADD_REMOVE(el_1,"open");
        _CLASS_CHECK_ADD_REMOVE(el_2,"open");
        _CLASS_CHECK_ADD_REMOVE(el_3,"open");
    });
}
function _DROP_BUTTON_TO_SHOW_EXTRA_MENU(){
    // nav.js -> drop-btn
    var drop_btn = document.querySelector(".drop-btn");
    drop_btn.addEventListener("mouseover",function(){
        var el = document.querySelector(".drop-menu");
        _CLASS_CHECK_ADD_REMOVE(el,"open");
    });
    drop_btn.addEventListener("mouseout",function(){
        var el = document.querySelector(".drop-menu");
        _CLASS_CHECK_ADD_REMOVE(el,"open");
    });
}
//////////////////////////////////////////////////////////////////////////////


function init(){
    _HEADER_BUTTON_TO_POPUP_MENU();
    _DROP_BUTTON_TO_SHOW_EXTRA_MENU();
};
init();