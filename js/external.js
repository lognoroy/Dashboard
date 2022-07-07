$(document).ready(function(){
        $(".toggle-btn").click(function(){
            $('#slidebar').toggleClass('active');
            $('#main-content').toggleClass('deactive');
            $('.slidebar-menu li span').toggleClass('menu-hide');
            $('.slidebar-brand h2 span').toggleClass('brand-hide');
});
});