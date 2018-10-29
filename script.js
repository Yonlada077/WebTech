$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 20) {
            $('.navbar').addClass('fixed');
        }else{
            $('.navbar').removeClass('fixed');
        }
    });
});
