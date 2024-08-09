const navButtons = document.querySelectorAll("nav a");
const counters = document.querySelectorAll(".count");
const speed = 100;

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) activateCounter();
});
observer.observe(document.querySelector(".count"));
const activateCounter = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(counter.getAttribute("data-target"));
      const count = parseInt(counter.innerText);
      let increment = Math.trunc(
        target / (target > speed ? speed : target / 10)
      );
      let delay = target > speed ? 15 : 60;

      if (count + 5 > target) {
        increment = 1;
      } else if (count + increment > target) {
        increment = 5;
      }
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, delay);
      }
    };
    updateCount();
  });
};

navButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    document.getElementById(event.target.classList[0]).scrollIntoView();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollImages = document.querySelector(".mags-container");
  const testmCards = document.querySelectorAll(".test-card");
  let currentTestm = 0;
  const leftButton = document.querySelector(".left");
  const rightButton = document.querySelector(".right");
  const leftTestm = document.querySelector(".left-testm");
  const rightTestm = document.querySelector(".right-testm");

  testmCards[currentTestm].classList.add("active");
  console.log(testmCards);

  leftButton.addEventListener("click", () =>
    leftScroll(scrollImages, scrollImages.clientWidth + 20)
  );
  rightButton.addEventListener("click", () =>
    rightScroll(scrollImages, scrollImages.clientWidth + 20)
  );
  leftTestm.addEventListener("click", () => scrollTestm("left", testmCards));
  rightTestm.addEventListener("click", () => scrollTestm("right", testmCards));

  function leftScroll(scroller, speed) {
    scroller.scrollBy({
      left: -speed,
      behavior: "smooth",
    });
  }

  function rightScroll(scroller, speed) {
    scroller.scrollBy({
      left: speed,
      behavior: "smooth",
    });
  }

  function scrollTestm(direction, testmArr) {
    console.log(direction, testmArr, currentTestm);
    if (direction === "left") {
      testmArr[currentTestm].classList.remove("active");
      if (currentTestm === testmArr.length - 1) currentTestm = -1;
      testmArr[++currentTestm].classList.add("active");
    } else if (direction === "right") {
      testmArr[currentTestm].classList.remove("active");
      if (currentTestm === 0) currentTestm = testmArr.length;
      testmArr[--currentTestm].classList.add("active");
    }
  }

  leftButton.addEventListener("click", leftScroll);
  rightButton.addEventListener("click", rightScroll);
});
