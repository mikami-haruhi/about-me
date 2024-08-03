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
