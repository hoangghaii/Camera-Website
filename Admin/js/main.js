"use strict";

const filterBtn = document.querySelectorAll(".filter__heading--item");
const filterContent = document.querySelectorAll(".filter-content");
filterBtn.forEach((item) => {
	item.addEventListener("click", function () {
		filterBtn.forEach((ele) => {
			ele.classList.remove("filter__heading--item-active");
		});
		if (!item.classList.contains("filter__heading--item-active")) {
			item.classList.add("filter__heading--item-active");
		}

		filterContent.forEach((ele) => {
			ele.classList.remove("filter--active");
		});
		document
			.querySelector(`#${item.dataset.id}`)
			.classList.add("filter--active");
	});
});

//** ------------- Functionality Modal ------------- */
const modal = document.querySelector(".modal");

const openModal = document.querySelectorAll(".open-modal");
openModal.forEach((item) => {
	item.addEventListener("click", function () {
		modal.classList.remove("hide");
		document
			.querySelector(`#${this.dataset.modal}`)
			.classList.remove("hide");
	});
});

const closeBtn = document.querySelectorAll(".close-modal");
closeBtn.forEach((item) => {
	const parentCloseBtn = item.parentElement;
	item.addEventListener("click", function () {
		modal.classList.add("hide");
		parentCloseBtn.classList.add("hide");
	});
});

//** ------------- Functionality Clock ------------- */
const clockFunction = function () {
	setInterval(() => {
		const time = document.querySelector(".clock__display #time");
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let day_night = "AM";
		if (hours > 12) {
			day_night = "PM";
			hours = hours - 12;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (hours < 10) {
			hours = "0" + hours;
		}
		time.textContent =
			hours + ":" + minutes + ":" + seconds + " " + day_night;
	});
};
clockFunction();
