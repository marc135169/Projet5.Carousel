const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('.tagLine');
const dots = document.querySelectorAll('.dot');
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const slideLength = slides.length;
const dotSelectedClass = "dot_selected";
let currentSlide = 0;


function updateBulletPoint() {
	dots.forEach(dot => dot.classList.remove(dotSelectedClass));
	dots[currentSlide].classList.add(dotSelectedClass);
}
function changeBanner() {
	image.setAttribute("src", `assets/images/slideshow/${slides[currentSlide].image}`);
	tagLine.innerHTML = `${slides[currentSlide].tagLine}`;
	updateBulletPoint();
}

arrowRight.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % slideLength;
	changeBanner();
});

arrowLeft.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + slideLength) % slideLength;
	changeBanner();
});



//------------------------------------DEMO----------------------

/*function showNextSlide() {
	currentSlide = (currentSlide + 1) % slideLength;
	changeBanner();
}

arrowRight.addEventListener("click", () => {
	showNextSlide();
});

setInterval(showNextSlide, 3000)*/

