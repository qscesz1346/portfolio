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

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
    
        speed: 1500
    });
});

const CIRCULATION_INTERVAL = 5000;

const splashImages = window.document.body.querySelectorAll(':scope > div.home > section.splash > div');
for (let i = 0; i < splashImages.length; i++) {
    splashImages[i].style.backgroundImage = `url("./stylesheets/images/index-${i + 1}.jpg")`;
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

const sideNav = document.getElementById("sideNav").children;
const hamNav = document.getElementById('hamNav');
const aTags = hamNav.getElementsByTagName('a');
const liTags = hamNav.getElementsByTagName('li');

const isMobile = window.matchMedia("(max-width: 767px)").matches;
const isTablet = window.matchMedia("(max-width: 1023px)").matches;

// 모바일 체크
// function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

$(document).ready(function() {
    
    for (let i = 0; i < sideNav.length; i++) {
        sideNav[i].addEventListener("click", function() {
            for (const el of sideNav) {
                el.classList.remove("selected");
            }
            sideNav[i].classList.add("selected");
            
            const location = sideNav[i].getElementById;
            if(isMobile) {
                window.scrollTo({
                  top: location.scrollTop - 100,
                  behavior: "smooth"
                });
            }
        });
        
        window.addEventListener("scroll", () => {
            const scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치

            console.log(scrollLocation);

            for (const el of sideNav) {
                el.classList.remove("selected");
            }

            if(scrollLocation>=0 && scrollLocation <= 850) {
                sideNav[0].classList.add('selected');
            } else if(scrollLocation >= 850 && scrollLocation <= 2235) {
                sideNav[1].classList.add('selected');
            } else if(scrollLocation >= 2235 && scrollLocation <= 3210) {
                sideNav[2].classList.add('selected');
            } else if(scrollLocation >= 3210 && scrollLocation <= 5220) {
                sideNav[3].classList.add('selected');
            } else {
                sideNav[4].classList.add('selected');
            }

        });
        
    };
});

$(function () {
    if(!isMobile) {
        // 	이미지 클릭시 해당 이미지 모달
        $(".swiper-slide").click(function(){
            $(".modal").show();
            // 해당 이미지 가져오기
            var imgSrc = $(this).children("img").attr("src");
            var imgAlt = $(this).children("img").attr("alt");
            $(".modal-box img").attr("src", imgSrc);
            $(".modal-box img").attr("alt", imgAlt);
        });
        
        //.modal안에 button을 클릭하면 .modal닫기
        $(".modal button").click(function(){
            $(".modal").hide();
        });
        
        //.modal밖에 클릭시 닫힘
        $(".modal").click(function (e) {
            if (e.target.className != "modal") {
                return false;
            } else {
                $(".modal").hide();
            }
        });
    }
});

//미디어쿼리 햄버거드롭다운
var burger = $('.menu-trigger');

burger.each(function(index){
    var $this = $(this);
    
    $this.on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active-' + (index+1));
    });
});

var h = 0;

$(burger).on("click", function () {
    if (h == 0) {
		$('.ham-con').animate({
			right: '0',
			opacity: 1
		}, 1000);
		$(this).addClass('active-1');
		h++;
	} else if (h == 1) {
		$('.ham-con').animate({
			right: '-100%',
			opacity: 0
		}, 1000);
		$(this).removeClass('active-1');
		h--;
	}
	$(window).scroll(function() {
		sct = $(window).scrollTop();
        if(sct>30){
            $('.ham-con').css({
                opacity: 0,
                right :'-100%'
            }, 1000);
            $(burger).removeClass('active-1');
            h=0;
        }
    });
});

$('.ham-nav li a').on("click", function () {
    $('.ham-con').animate({
        right: '-100%',
        opacity: 0
    }, 1000);
    $(burger).removeClass('active-1');
    h = 0;
});

// 메인화면 타이핑효과
const target1 = document.querySelector("#typingCursor1");
const target2 = document.querySelector("#typingCursor2");

function blink() {  // 커서 깜빡이는 효과
    target2.classList.toggle("active");
}

const string1 = "Welcome, LDG's Portfolio";
const string2 = "WEB DEVELOPER";
const split1 = string1.split("");
const split2 = string2.split("");

// 첫줄 타이핑효과
function typing1(arr) {
    if (arr.length > 0) {
        target1.textContent += arr.shift();
        setTimeout(function() {
            typing1(arr)}, 80)
    }
}
// 두번째 줄 타이핑효과
function typing2(arr) {
    if (arr.length > 0) {
        target2.textContent += arr.shift();
        setTimeout(function() {
            typing2(arr);
        }, 80)
    } else {
        target2.classList.add('cursorVisible');
        setTimeout(function() {setInterval(blink, 500)}, 500);
    }
}
typing1(split1);
setTimeout(function() {typing2(split2)}, 2000);


// 미디어 쿼리 햄버거메뉴 클릭시 작동

const mainDiv = document.querySelectorAll("#main > div:not(.back-to-top)");

$(document).ready(function() {

    for (let i = 0; i < aTags.length; i++) {
        aTags[i].addEventListener("click", function(event) {
            event.preventDefault(); // 링크 클릭 시 페이지 이동 방지
    
            for (const lt of liTags) {
                lt.classList.remove("selected");
            }
            liTags[i].classList.add("selected");
            const aTagsHref = this.getAttribute('href');
            const aTagsId = aTagsHref.substring(1);
            const aTagsElement = document.getElementById(aTagsId);
            const mainBG = document.getElementById("main");
            console.log(aTagsId);
            for (const md of mainDiv) {
                md.style.display = 'none';
            }
            if (aTagsId == "top") {
                mainBG.style.display = 'none';
            } else {
                mainBG.style.display = 'block';
                aTagsElement.style.display = 'block';
            }

            
        });
    }
});