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

    // 以下の箇所は削除しました
    // window.addEventListener('resize', function() {
    //     if (window.innerWidth > 768) {
    //         closeMenu();
    //     }
    // });

    // ボックスとボタンのアニメーション（既存の機能を保持）
    const boxes = document.querySelectorAll('.box');
    const buttons = document.querySelectorAll('.button');

    function showBoxes() {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (boxTop < triggerPoint) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    }

    function checkButtonPosition() {
        buttons.forEach((button, index) => {
            const rect = button.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setTimeout(() => {
                    button.classList.add('show');
                }, index * 200);
            }
        });
    }

    window.addEventListener('scroll', function() {
        showBoxes();
        checkButtonPosition();
    });

    // 初期表示時にも実行
    showBoxes();
    checkButtonPosition();
});