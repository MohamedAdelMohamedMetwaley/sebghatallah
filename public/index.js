const navButtons = document.querySelectorAll("nav a");
const counters = document.querySelectorAll('.count');
const speed = 100;

const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting)
        activateCounter();
})
observer.observe(document.querySelector(".count"));
const activateCounter = () => {
    counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(counter.getAttribute('data-target'));
        const count = parseInt(counter.innerText);
        let increment = Math.trunc(target / (target > speed? speed : (target / 10)));
        let delay = target > speed? 15 : 60;
        
        if (count+5 > target){
            increment = 1;
        }
        else if(count+increment > target){
            increment = 5;
        }
        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, delay);
        } 
    };
        updateCount();
    });
}

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