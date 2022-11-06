"use strict";

//<section class="container-our-services">
const ourServisesLi = document.querySelectorAll(".our-services-list-item");
const lengthOurServises = ourServisesLi.length;
const Switcher = ()=>{
    return function (){
        let ourServisesContent = document.querySelector(`.our-service-content-item[data-text="${this.dataset.text}"]`);
        document.querySelector('.our-services-list-item.active').classList.remove('active');
        document.querySelector('.our-service-content-item.active').classList.remove('active');
        ourServisesContent.classList.add('active');
        this.classList.add('active');
    }
};

for(let i =0; i<lengthOurServises; i++){
    ourServisesLi[i].addEventListener("click", Switcher());
}

//<section class="our-amazing-work">
const tabsFoto = document.querySelectorAll('.amazing-work-elem');
const wrapCard = document.querySelectorAll('.amazing-work-gallery-item');
amazingWorkMenuList.onclick =(e)=>{
    let target = e.target;
    tabsFoto.forEach((elem) => {elem.classList.remove('active')});
    target.classList.add('active');
    let tabCategory = target.dataset.content;
    wrapCard.forEach((e)=>{
         e.classList.add('hidden');
         let cardCategory = e.dataset.content;
        let loadAttr = e.getAttribute('data-load');
         if(tabCategory === 'All' && loadAttr === null) {
             e.classList.remove('hidden');
         }else if(tabCategory === cardCategory && loadAttr === null){
             e.classList.remove('hidden');
         }
    });
};

/*=====SLIDER=====*/

let currentSlide = 0;
const navigation = document.querySelectorAll('.small-user-foto');
const slides = document.querySelectorAll('.presentation-user-slider');
const next = document.getElementById('goLeft');
const previous = document.getElementById('goRight');

for(let i = 0; i<navigation.length; i++) {
    navigation[i].onclick = function () {
        currentSlide = i;
        document.querySelector('.container.presentation-user-slider.active').classList.remove('active');
        document.querySelector('.small-user-foto.active').classList.remove('active');
        navigation[currentSlide].classList.add('active');
        slides[currentSlide].classList.add('active');
    }
}

next.onclick = function() {
    nextSlide(currentSlide);
};

previous.onclick = function() {
    previousSlide(currentSlide);
};

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    hideSlides();
    currentSlide = (n+slides.length)%slides.length;
    showSlides();
}

function hideSlides(){
    slides[currentSlide].className = 'container presentation-user-slider';
    navigation[currentSlide].className = 'small-user-foto';
}

function showSlides(){
    slides[currentSlide].className = 'container presentation-user-slider active';
    navigation[currentSlide].className = 'small-user-foto active';
}