// img slider
let sliderImgs,
	descriptions,
	dots,
	currentIndex = 0;

function refreshCurrent() {
	for (let idx = 0; idx < sliderImgs.length; idx++) {
		sliderImgs[idx].style.display = 'none';
		descriptions[idx].style.display = 'none';
	}
	sliderImgs[currentIndex].style.display = 'block';
	descriptions[currentIndex].style.display = 'block';
}

function refereshDots() {
	[...dots].map((el) => (el.className = ''));
	dots[currentIndex].className = 'active';
}

function moveLeft() {
	currentIndex--;
	if (currentIndex < 0) currentIndex = sliderImgs.length - 1;

	refreshCurrent();
	refereshDots();
}

function moveRight() {
	currentIndex++;
	if (currentIndex > sliderImgs.length - 1) currentIndex = 0;

	refreshCurrent();
	refereshDots();
}

function dotClick(c) {
	currentIndex = c;
	refreshCurrent();
	refereshDots();
}

(function () {
	let homeBgColor = localStorage.getItem('homeBgColor'),
		homeTitleColor = localStorage.getItem('homeTitleColor'),
		homeTitleSize = localStorage.getItem('homeTitleSize');
	if (homeBgColor) document.querySelector('.topSection').style.backgroundColor = homeBgColor;
	if (homeTitleColor) document.querySelector('.topSection h2').style.color = homeTitleColor;
	if (homeTitleSize) document.querySelector('.topSection h2').style.fontSize = homeTitleSize + 'px';

	(sliderImgs = document.querySelectorAll('.image-container img')), (descriptions = document.querySelectorAll('.desc div'));
	for (let i = 0; i < sliderImgs.length; i++) {
		let newDot = document.createElement('li');

		newDot.setAttribute('onclick', 'dotClick(this.id)');
		newDot.setAttribute('id', parseInt(i));

		let dotContainer = document.querySelector('.dotList');
		dotContainer.appendChild(newDot);
	}
	dots = document.querySelectorAll('.dotList li');

	refreshCurrent();
	refereshDots();
})();
