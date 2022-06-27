/*--------------------
File: Javascript file
Project: NZ Website
Author: Daniel Lagesse
Date: 2022-06-23
----------------------*/
// Modal Iamges
const images = document.querySelectorAll(".images"); // Target all images with the "images" class
const modal = document.querySelector(".modal"); // Target the modal
const modalImg = document.querySelector(".modalImg"); // Target the modal image
const modalTxt = document.querySelector(".modalTxt"); // Target the modal text

images.forEach(image => { // Loops for each image with the "images" class
    image.addEventListener("click", () => { // Event listener for when the user clicks on an image
        modalImg.src = image.src; // Send the clicked image to the modal image
        modal.classList.add("appear"); // Add ".appear" to the classlist with its own styling that enlarges the image
    });

    modalImg.addEventListener("click", () => {
        modal.classList.remove("appear"); // Remove ".appear" from the classlist that shrinks the image
    });
});

// Hamburger Menu
const toggle = document.querySelector(".toggle-btn"); // Targets the Hamburger Menu button
const nav = document.querySelector(".links"); // Targets the Navigation bar links

toggle.addEventListener('click', () => { // Event listener for when the user clicks/taps on the hamburger menu
    nav.classList.toggle('clicked'); // Adds a "clicked" to the classlist with its own styling that makes the navbar links appear or disappear
});