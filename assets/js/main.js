$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.hamburger').click(function(){
        $('.hamburger').toggleClass('active');
        $('.navbar-nav').toggleClass('active-nav');
        $('body').toggleClass('overflowNone')
    });

    $('.owl-products').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

$(document).ready(function() {
    let i = 120;
    let a = setInterval(function() {
        if (i < 10)
            document.querySelector('.count_down').textContent = `0${i}`;
        else {
            document.querySelector('.count_down').textContent = `${i}`
        }
        i--;
        if (i < 0) {
            clearInterval(a);
        }
    }, 1000)
});

$(document).ready(function() {
    const codes = document.querySelectorAll('.code');
    codes[0].focus();
    codes.forEach((code, idx) => {
        code.addEventListener('keydown', (e) => {
            if (e.key >= 0 && e.key <= 9) {
                codes[idx].value = '';
                setTimeout(() => codes[idx + 1].focus(), 10);
            } else if (e.key === 'Backspace') {
                setTimeout(() => codes[idx - 1].focus(), 10);
            }
        });
    });
});