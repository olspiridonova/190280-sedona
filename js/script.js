var link = document.querySelector(".booking-form-header");
var popup = document.querySelector(".hotel-search-form");
var form = popup.querySelector("form");
var indate = popup.querySelector("[name=in-field]");
var outdate = popup.querySelector("[name=out-field]");
var adult = popup.querySelector("[name=adult-field]");
var children = popup.querySelector("[name=children-field]");
var adultstorage = localStorage.getItem("adult");
var childrenstorage = localStorage.getItem("children");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.toggle("form-open");
});

form.addEventListener("submit", function(event) {
	if (!indate.value || !outdate.value || !adult.value) {
		event.preventDefault();
	} else {
	localStorage.setItem("adult", adult.value);
	localStorage.setItem("children", children.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
	if (popup.classList.contains("form-open")) {
	popup.classList.remove("form-open");
	}
	}
});

	