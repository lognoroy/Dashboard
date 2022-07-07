$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()) {
            $("#arrow i").fadeIn();
    }
        else {
            $("#arrow i").fadeOut();
    }
    });
    $("#arrow i").on('click',function(){
    $("html,body").animate({
        scrollTop: 0
    }, 600);
        return false;
    });
    });
    