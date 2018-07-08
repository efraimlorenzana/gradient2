const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const body = document.querySelector('#gradient');
const option = document.querySelectorAll('input[name="coloralign"]');
const css = document.querySelector('#css');

function setGradient(e,i,d = "to right,") {
	body.style.background = `linear-gradient(${d} ${color1.value}, ${color2.value}, ${color3.value}`;
	css.textContent = body.style.background + ";";
}

option.forEach(function (e) {
	e.addEventListener('click',setRadio);
})

function setRadio () {
	setGradient(null,null,this.value);
}

color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);
color3.addEventListener('input',setGradient);
