const navButtons = document.querySelectorAll("nav a");
    navButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            document.getElementById(event.target.classList[0]).scrollIntoView();
        })
    })