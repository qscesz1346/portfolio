// let SHSlickImage = window.document.body.querySelector(':scope > div.main > div.project > div.s-pj > div.fade');

// $(document).ready(function(){
//     $('.fade').slick({
//         slide: 'div',
//         infinite: true,
//         speed: 500,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnHover: true,
//         vertical: false,
//         prevArrow: $('.slick-prev'),
//         nextArrow: $('.slcik-next'),
//         draggable: true,
//         fade: true,
//         cssEase: 'linear'
//     });
// });
$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 5,
        slidesPerGroup: 1,
    
        centeredSlides: true,
        loop: true,
        direction: 'horizontal', //vertical , horizontal
        debugger: false,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
    
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
    
        speed: 1500
    });
});

const CIRCULATION_INTERVAL = 5000;

let splashImages = window.document.body.querySelectorAll(':scope > div.home > section.splash > div');
for (let i = 0; i < splashImages.length; i++) {
    splashImages[i].style.backgroundImage = `url("../stylesheets/images/index-${i + 1}.jpg")`;
    splashImages[i].style.objectFit = 'cover';
    splashImages[i].style.width = '100%';
    splashImages[i].style.height = '100%';
}

function circulateSplash(currentSplashIndex) {
    setTimeout(() => {
        splashImages[currentSplashIndex++].classList.remove('visible');
        if (currentSplashIndex === splashImages.length) {
            currentSplashIndex = 0;
        }
        splashImages[currentSplashIndex].classList.add('visible');
        circulateSplash(currentSplashIndex);
    }, CIRCULATION_INTERVAL);
}
circulateSplash(0);

$('.back-to-top').click(function() {
    $(window).scrollTop();
});

document.addEventListener('scroll',function(){
    console.log(document.documentElement.scrollTop);
});

$(".navBtn").click(function(event){
    btn = $(this).attr("href");
    $("html, body").animate({
        scrollTop : $(btn).offset().top
    }, 1500, "easyInOutSine"
    );
});