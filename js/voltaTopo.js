$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('i[href="#top"]').fadeIn();
        } else {
            $('i[href="#top"]').fadeOut();
        }
    });

    $('i[href="#top"]').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});