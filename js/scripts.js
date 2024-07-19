function toggleMenu() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

function handleScroll() {
    if (window.innerWidth > 768) { // デスクトップ版
        if (window.pageYOffset >= navbar.offsetTop) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
}

// イベントリスナーを設定
menuIcon.addEventListener("click", toggleMenu);
window.addEventListener("scroll", handleScroll);

document.add


window.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');

    const showBoxes = () => {
        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (boxTop < triggerPoint) {
                box.classList.add('show');
            } else {
                box.classList.remove('show');
            }
        });
    };

    window.addEventListener('scroll', showBoxes);

    // ページ読み込み時にも実行
    showBoxes();
});

document.addEventListener("DOMContentLoaded", function() {
    function resizeTwitterTimeline() {
        var twitterTimeline = document.querySelector('.twitter-timeline');
        if (window.innerWidth <= 480) {
            twitterTimeline.setAttribute('data-height', '300');
        } else if (window.innerWidth <= 768) {
            twitterTimeline.setAttribute('data-height', '400');
        } else {
            twitterTimeline.setAttribute('data-height', '520');
        }
    }
    
    resizeTwitterTimeline();
    window.addEventListener('resize', resizeTwitterTimeline);
});


