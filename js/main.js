/*--------------------
File: Javascript file
Project: NZ Website
Author: Daniel Lagesse
Date: 2022-06-23
----------------------*/
// Modal Iamges
const images = document.querySelectorAll(".images");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");

images.forEach(image => {
    image.addEventListener("click", () => {
        modalImg.src = image.src;
        modal.classList.add("appear");
    });

    modalImg.addEventListener("click", () => {
        modal.classList.remove("appear");
    });
});

// Hamburger Menu
const toggle = document.querySelector(".toggle-btn");
const nav = document.querySelector(".links");

toggle.addEventListener('click', () => {
    nav.classList.toggle('clicked');
});