$(window).resize(function(){
    var ww = $(window).width();
    var $bgimg=$('.bg img');
    if(ww>900) {
        $bgimg.css({
            "left": 0
        });
    }
    if(ww<900){
        $bgimg.css({
            "left": ww-900
        });
    }

});

var toggle = true;

$('.NavToggle').click(function() {
    $('#left-bar').off('click',navclick);
    if(toggle == true){
        $('#right-bar').css('visibility','visible');
        $('#left-bar').animate({left:'-430px'},'easeInOutCubic',
        function () {
            $('#left-bar').on('click',navclick);
        });
    }else{
        $('#left-bar').animate({left:'0'},'easeInOutCubic',
        function () {
                $('#right-bar').css('visibility','hidden');
            }
        );
    };
    $('.NavToggle').toggleClass('actived');
    toggle = -toggle;
});


    function navclick(){
    if(toggle == -1){
        $('.NavToggle').removeClass('actived');
        $('#left-bar').animate({left:'0'},
            function () {
                $('#right-bar').css('visibility','hidden');
                toggle = -toggle;
            })
        $('#left-bar').off('click',navclick);
    }
}






