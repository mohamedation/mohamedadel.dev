const idContainer = document.querySelector('.wrap');
const twitter = document.querySelector('.twitter');
const github = document.querySelector('.github');
const dev = document.querySelector('.dev');
const blog = document.querySelector('.blog');
const email = document.querySelector('.email');
document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World!");
    idContainer.classList.add('reveal');
    twitter.classList.add('slideup');
    github.classList.add('slideup');
    dev.classList.add('slideup');
    blog.classList.add('slideup');
    email.classList.add('slideup');
    const interval = setInterval(function() {
        setRandomClass();
    }, 3000);
});

function setRandomClass() {
    let x = Math.floor((Math.random() * 36) + 1);
    var dev = document.querySelector('.dev'+x);
    dev.classList.toggle("devanimation");
}