document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.menu a');
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector('.menu');

    function getHeaderHeight() {
        return nav.offsetHeight;
    }

    function adjustScrollPosition(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = getHeaderHeight();
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    function toggleMenu() {
        menu.classList.toggle('open');
    }

    function closeMenu() {
        menu.classList.remove('open');
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                adjustScrollPosition(targetId);
            }
            closeMenu();
        });
    });

    menuIcon.addEventListener('click', toggleMenu);

    const boxes = document.querySelectorAll('.box');
    const buttons = document.querySelectorAll('.button');
    const galleryImages = document.querySelectorAll('.gallery img');
    const youtubeIframes = document.querySelectorAll('.youtube-video iframe');
    const twitterEmbed = document.querySelector('.twitter-embed');

    function showElements(elements) {
        elements.forEach((element, index) => {
            const elementTop = element.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (elementTop < triggerPoint) {
                setTimeout(() => {
                    element.classList.add('show');
                }, index * 200); // Adjust the delay as needed
            } else {
                element.classList.remove('show');
            }
        });
    }

    function showBoxes() {
        showElements(boxes);
    }

    function checkButtonPosition() {
        showElements(buttons);
    }

    function showGalleryImages() {
        showElements(galleryImages);
    }

    function showYouTubeIframes() {
        showElements(youtubeIframes);
    }

    function showTwitterEmbed() {
        if (twitterEmbed) {
            const elementTop = twitterEmbed.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (elementTop < triggerPoint) {
                twitterEmbed.classList.add('show');
            } else {
                twitterEmbed.classList.remove('show');
            }
        }
    }

    window.addEventListener('scroll', function() {
        showBoxes();
        checkButtonPosition();
        showGalleryImages();
        showYouTubeIframes();
        showTwitterEmbed();
    });

    // 初期表示時にも実行
    showBoxes();
    checkButtonPosition();
    showGalleryImages();
    showYouTubeIframes();
    showTwitterEmbed();
});


document.addEventListener("DOMContentLoaded", function() {
    const backgroundImage = document.querySelector(".background-image");
    const images = [
        "sky-2337111_1280.jpg",
        "sunset-glow-679119_1280.jpg", // ここに追加する画像のURLを挿入
        "air-2643070_1280.jpg", // 他の画像も追加可能
        // 追加する画像をリストに入れていく
    ];

    let currentIndex = 0;

    function changeBackgroundImage() {
        // 次の画像のインデックスを計算
        const nextIndex = (currentIndex + 1) % images.length;

        // 新しい画像をすぐにセットしてフェードインをスムーズに
        const nextImage = new Image();
        nextImage.src = images[nextIndex];

        // 画像が読み込まれたらフェードアウトと画像切り替えを同時に実行
        nextImage.onload = () => {
            backgroundImage.classList.add("fade");

            setTimeout(() => {
                backgroundImage.style.backgroundImage = `url(${images[nextIndex]})`;
                backgroundImage.classList.remove("fade");
                currentIndex = nextIndex;
            }, 2000); // フェードアウトと同じ時間(2秒)に設定
        };
    }

    // 最初の画像設定
    backgroundImage.style.backgroundImage = `url(${images[currentIndex]})`;

    // 5秒ごとに画像を変更（フェードイン・フェードアウトの2秒を考慮）
    setInterval(changeBackgroundImage, 5000);
});
