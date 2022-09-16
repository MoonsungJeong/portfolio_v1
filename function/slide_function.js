function _SLIDE_FUNCTION(){
    var slide = document.querySelector(".slider");
    if(slide){
        var slideList = document.querySelector('.slide_list');
        var slideContents = document.querySelectorAll('.slide_content');
        var pagination = document.querySelector('.slide_pagination');
        var slideLen = slideContents.length;
        var slideWidth = 17;
        var slideSpeed = 1000;
        var startNum = 0;

        slideList.style.width = slideWidth * (slideLen) + "rem";

        var pageChild ='';
        for(var i = 0; i < slideLen; i++){
            pageChild += '<li class="dot';
            pageChild += (i === startNum) ? ' dot_active' : '';
            pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
        }
        pagination.innerHTML = pageChild;
        var pageDots = document.querySelectorAll('.dot');

        slideList.style.transform = "translate3d(-"+(slideWidth*(startNum))+"rem,0rem,0rem)";

        var curIndex = startNum;
        var curSlide = slideContents[curIndex];
        curSlide.classList.add('slide_active');

        var curDot;
        Array.prototype.forEach.call(pageDots, function(dot,i){
            dot.addEventListener('click', function(e){
                e.preventDefault();
                curDot = document.querySelector('.dot_active');
                curDot.classList.remove('dot_active');

                curDot = this;
                this.classList.add('dot_active');

                curSlide.classList.remove('slide_active');
                curIndex = Number(this.getAttribute('data-index'));
                curSlide = slideContents[curIndex];
                curSlide.classList.add('slide_active');
                slideList.style.transition = slideSpeed + "ms";
                slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex)) + "rem, 0rem, 0rem)";
            });
        });
    }
}
export default _SLIDE_FUNCTION;