import { _CLASS_CHECK_ADD_REMOVE, _HEADER_BUTTON_TO_POPUP_MENU, _DROP_BUTTON_TO_SHOW_EXTRA_MENU, _HEADER_DROP_BUTTON_TO_SHOW_EXTRA_MENU, _SCROLL_TO_THE_TOP_BTN} from '../function/function.js';
import _CONTACT from '../function/form-submission-handler.js';
import _SLIDE_FUNCTION from '../function/slide_function.js';
import _NAVIGATION from '../function/navigate_function.js';

function init(){
    _HEADER_BUTTON_TO_POPUP_MENU();
    _DROP_BUTTON_TO_SHOW_EXTRA_MENU();
    _HEADER_DROP_BUTTON_TO_SHOW_EXTRA_MENU();
    _SCROLL_TO_THE_TOP_BTN();
    _CONTACT();
    _SLIDE_FUNCTION();
    _NAVIGATION();
};
init();



// Attach JS Event again, when DOM is changed(=Page is changed)
var objectObserved = document.getElementById("app");
var observer = new MutationObserver(function(){
    init();
});
observer.observe(objectObserved,{childList:true});