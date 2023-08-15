let reBttn = document.getElementById("return-bttn");

reBttn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    keyboard: true,
});
