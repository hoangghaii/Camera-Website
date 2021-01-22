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

const openAddModal = document.querySelector(".open-add-modal");
openAddModal.addEventListener("click", function () {
	document.querySelector(`#${this.dataset.modal}`).classList.remove("hide");
	document
		.querySelector(`#${this.dataset.addModal}`)
		.classList.remove("hide");
});

const openProductModal = document.querySelector(".open-product-modal");
openProductModal.addEventListener("click", function () {
	document.querySelector(`#${this.dataset.modal}`).classList.remove("hide");
	document
		.querySelector(`#${this.dataset.productModal}`)
		.classList.remove("hide");
});

const closeBtn = document.querySelector(".close-modal");
const parentCloseBtn = closeBtn.parentElement;
const modal = parentCloseBtn.parentElement;
modal.addEventListener("click", function () {
	modal.classList.add("hide");
	parentCloseBtn.classList.add("hide");
});
closeBtn.addEventListener("click", function () {
	modal.classList.add("hide");
	parentCloseBtn.classList.add("hide");
});
