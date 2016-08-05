var $bgimg=$('.bg img');
var $leftbar=$('#left-bar');
var $rightbar=$('#right-bar');
var $navtoggle=$('.NavToggle');
var $skill=document.getElementById ("skill");

$(window).on('resize',size);

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
            "left": 0
        });
    }

}
var toggle = true;

$navtoggle.click(function() {
    $leftbar.off('click',navclick);
    if(toggle == true){
        $rightbar.css('visibility','visible');
        $leftbar.animate({left:'-280px'},'easeInOutCubic',
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

$(function() {
    $("#contact_form .btn-b").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#message").val();
        var dataString = 'name='+ name + '&email=' + email + '&text=' + text;
        console.log(123)
        $.ajax({
            type: "POST",
            url: "email.php",
            data: dataString,
            success: function(){
                $('.success').fadeIn(1000);
            }
        });
        return false;
    });
});



