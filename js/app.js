
const navLinks = document.querySelector(".nav-links");
const lines = document.querySelector(".lines");
const navLi = document.querySelectorAll(".nav-links li");
const line = document.querySelectorAll(".line");
lines.addEventListener('click', (e)=>{
    navLinks.classList.toggle('open');
    navLi.forEach((list)=>{
        list.classList.toggle('fade');
    });

    line[1].classList.toggle("disappear");
    line[0].classList.toggle("rotatesixty");
    line[2].classList.toggle("rotateminussixty");
});


console.log("hey")
