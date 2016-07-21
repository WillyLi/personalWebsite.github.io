var $bgimg=$('.bg img');
var $leftbar=$('#left-bar');
var $rightbar=$('#right-bar');
var $navtoggle=$('.NavToggle');
var $skill=document.getElementById ("skill");;
$(window).resize(size());

function size(){
    var ww = $(window).width();
    console.log(ww);
    if(ww>640) {
        $bgimg.css({
            "left": (ww-2000)/10
        });
    }
    if(ww<640){
        $bgimg.css({
            "left": ww-640
        });
    }

}
var toggle = true;

$navtoggle.click(function() {
    $leftbar.off('click',navclick);
    if(toggle == true){
        $rightbar.css('visibility','visible');
        $leftbar.animate({left:'-330px'},'easeInOutCubic',
        function () {
            $leftbar.on('click',navclick);
        });
    }else{
        $leftbar.animate({left:'0'},'easeInOutCubic',
        function () {
                $rightbar.css('visibility','hidden');
            }
        );
    };
    $navtoggle.toggleClass('actived');
    toggle = -toggle;
});


    function navclick(){
    if(toggle == -1){
        $navtoggle.removeClass('actived');
        $leftbar.animate({left:'0'},
            function () {
                $rightbar.css('visibility','hidden');
                toggle = -toggle;
            });
        $leftbar.off('click',navclick);
    }
}

$(window).scroll(function () {
    var scrolltop=  $(window).scrollTop();
    var skilltop = $skill.offsetTop;
    console.log(scrolltop);
    console.log(skilltop);

    if (scrolltop>=skilltop){
        $('.bar').addClass('go');
    }

});





