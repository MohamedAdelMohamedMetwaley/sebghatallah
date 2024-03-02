const navButtons = document.querySelectorAll("nav a");

navButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        document.getElementById(event.target.classList[0]).scrollIntoView();
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".mags-container");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".left");
    const rightButton = document.querySelector(".right");

    function checkScroll() {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            rightButton.setAttribute("disabled", "true");
            leftButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            leftButton.setAttribute("disabled", "true");
            rightButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }
    
    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    checkScroll();
    
    function leftScroll() {
        console.log("scroll left");
        scrollImages.scrollBy({
        left: -400,
        behavior: "smooth"
        });
    }
    
    function rightScroll() {
        scrollImages.scrollBy({
        left: 400,
        behavior: "smooth"
        });
    }
    
    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);
});