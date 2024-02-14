const slider = document.querySelector('.slider');
const prevbtn = document.querySelector('.prev-btn');
const nextbtn = document.querySelector('.next-btn');
const slides = Array.from(document.querySelectorAll('.slide'));
const slidesLength = slides.length;
let slideIndex = 0;

prevbtn.addEventListener('click', goToPrevSlide);
nextbtn.addEventListener('click', goToNextSlide);

function goToPrevSlide() {
    slideIndex -= 1;
    if (slideIndex < 0) {
        slideIndex = slidesLength - 1;
    }
    showSlide();
}

function goToNextSlide() {
    slideIndex += 1;
    if (slideIndex >= slidesLength) {
        slideIndex = 0;
    }
    showSlide();
}

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

// Accordion

const acc = document.querySelectorAll('.accordion');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active')

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.cssText = `max-height: ${null}; padding: 0px 30px`
        } else {
            panel.style.cssText = `max-height: ${panel.scrollHeight + 20}px;
             padding: 10px 30px;`
        }
    })
}

// Burger

const menu = document.querySelector('.menu');
const span = document.querySelector('.menu-burger_header')

span.addEventListener('click', () => {
    menu.classList.toggle('active')
})

// Tabs

const btns = document.querySelectorAll('.tabs__btn')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const Item = document.querySelector('.tabs__block._active')
        const itemBtn = document.querySelector('.tabs__btn._active')

        if (Item) {
            Item.classList.remove('._active');
        }

        if (itemBtn) {
            itemBtn.classList.remove('._active');
        }

        const nextItemId = `#${btn.getAttribute('data-tab')}`;
        const nextItem = document.querySelector(nextItemId);

        btn.classList.add('._active');
        nextItem.classList.add('._active');
    });
})

// Dino Game

const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', jump);

function jump() {
    if (!dino.classList.contains('jump')) {
        dino.classList.add('jump');
    }
    setTimeout(() => dino.classList.remove('jump'), 500)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if ((cactusLeft < 50 && cactusLeft > 0) && dinoTop >= 150) {
        alert('Game over')
    }
}, 20)


