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
    const buttons = document.querySelectorAll('.button');

    function checkPosition() {
        buttons.forEach((button, index) => {
            const rect = button.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setTimeout(() => {
                    button.classList.add('show');
                }, index * 200); // 各ボタンの表示を0.2秒ずつ遅らせる
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
    checkPosition(); // 初期表示時にもチェック
});

function toggleMenu() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
}

window.addEventListener('scroll', function() {
    var div = document.querySelector('.header');
    div.classList.toggle('sticky', window.scrollY > 0);
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ページ読み込み時にURLのハッシュに対応する要素までスクロール
window.addEventListener('load', () => {
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
        }
    }
});

function toggleMenu() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
    
    // メニューが開いているときはスクロールを無効にする
    if (nav.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}