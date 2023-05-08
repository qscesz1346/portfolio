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

let sideNav = document.getElementById("sideNav").children;


$(document).ready(function(){
    
    for (let i = 0; i < sideNav.length; i++) {
        sideNav[i].addEventListener("click", function() {
            for (const el of sideNav) {
                el.classList.remove("selected");
            }
            sideNav[i].classList.add("selected");
        });
        
        window.addEventListener("scroll", () => {
            let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
            
            console.log(scrollLocation);

            for (const el of sideNav) {
                el.classList.remove("selected");
            }

            if(scrollLocation>=0 && scrollLocation <= 850) {
                sideNav[0].classList.add('selected');
            } else if(scrollLocation >= 850 && scrollLocation <= 1330) {
                sideNav[1].classList.add('selected');
            } else if(scrollLocation >= 1330 && scrollLocation <= 2250) {
                sideNav[2].classList.add('selected');
            } else if(scrollLocation >= 2250 && scrollLocation <= 3800) {
                sideNav[3].classList.add('selected');
            } else {
                sideNav[4].classList.add('selected');
            }
        });
        
    };
});