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