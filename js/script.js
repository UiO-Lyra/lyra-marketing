let slideIndex = 0;  
let dots = [];  
let slideTimeout;
let slideLength;

let imgs = ["../images/Gruppebilde.jpg", "../images/Gruppeledere.jpg"];
let alts = ["Bilde 1", "Bilde 2"];

function showSlides() {
    let image = document.getElementById("slideImg");
    image.src = imgs[slideIndex];

    updateDots();

    slideIndex = (slideIndex + 1) % slideLength;
    slideTimeout = setTimeout(showSlides, 2000);
}

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex].classList.add("active");
}

function currentSlide(n) {
   
    clearTimeout(slideTimeout);
    slideIndex = n;
    showSlides();
}

function initalizeDots() {
    let dotsDiv = document.getElementById("dot-container");
    for (let i = 0; i < slideLength; i++) {
        let dot = document.createElement("span");
        dot.setAttribute("class", "dot");
        dot.setAttribute("alt", alts[i]);
        dot.setAttribute("onclick", "currentSlide("+i+")");
        dots.push(dot);
        dotsDiv.appendChild(dot);
    }
}

slideLength = imgs.length;
initalizeDots();
showSlides();
