document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.menu a[href^="#"]');
    const menuIcon = document.querySelector(".menu-icon");
    
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

    function closeMenu() {
        nav.classList.remove('active');
    }

    function handleScroll() {
        if (window.innerWidth > 768) {
            if (window.pageYOffset > 50) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        } else {
            nav.classList.remove('sticky');
        }
    }

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            adjustScrollPosition(targetId);
            closeMenu();
        });
    });

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    window.addEventListener('scroll', handleScroll);

    // 既存の機能を保持
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
    handleScroll();
});
