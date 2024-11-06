let slideIndex = 0;  
let dots = [];  
let slideTimeout;  

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");  

    // Skjul alle slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";

    updateDots();

    slideTimeout = setTimeout(showSlides, 2000);
}

function updateDots() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[slideIndex - 1].classList.add("active");
}

function currentSlide(n) {
   
    clearTimeout(slideTimeout);

    slideIndex = n;
    showSlides(); 

    // Start ny tidsklokke etter 2 sekunder
    slideTimeout = setTimeout(showSlides, 2000);
}

showSlides();
