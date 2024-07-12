// メニューのトグル
function toggleMenu() {
}

document.addEventListener("click", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");

});

// ナビゲーションバーの固定
const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
        nav.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll('.box');
    const kuwasiku = document.querySelector('.kuwasiku');

    const showElements = () => {
        // box要素の表示
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

    window.addEventListener('scroll', showElements);
    // ページ読み込み時にも実行
    showElements();
});

