let menu = document.querySelector(".menu");
let navBottom = document.querySelector(".nav-bottom");
let smallImg = document.querySelectorAll(".small-images img");
let smallImg2 = document.querySelectorAll(".small-images-2 img");
let bigImg = document.querySelector(".big-img img");
let bigImg2 = document.querySelector(" .big-img-2 img");
menu.addEventListener("click", () => {
    navBottom.classList.toggle("nav-bottom-active")
});

smallImg.forEach(el => {
    el.addEventListener("click", () => {
        bigImg.src = el.src;
    })
})
smallImg2.forEach(img2 => {
    img2.addEventListener("click", () => {
        bigImg2.src = img2.src;
    })
})