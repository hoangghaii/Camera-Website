"use strict";

const filterBtn = document.querySelectorAll(".filter__heading--item");

const filterContent = document.querySelectorAll(".filter-content");

const activeBtn = function (item) {
	console.log(item.classList);
};

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
