const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const all = document.querySelector(".content__box");
const footer = document.querySelector(".footer__box");
const logo = document.querySelector(".logo__box--photo");
const hamburgerbox = document.querySelector(".logo__hamburger");
const allbox = document.querySelector(".wrapper");
let topposition = hamburgerbox.offsetTop;
let screenwindow = window.innerWidth;
console.log(screenwindow);

function bodyresize()
{
    screenwindow = window.innerWidth;
    console.log(screenwindow);
}

const change = () =>
{
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("navigation--active");
    hamburgerbox.style.position="relative";
    console.log(topposition);
    topposition = hamburgerbox.offsetTop;
   if(topposition == 95 || topposition == 60)
    {
        if(screenwindow < 800)
        {
        hamburgerbox.style.top="-80px";
        }
        else
        {
            hamburgerbox.style.top="-60px";
        }
    }
    else{
        hamburgerbox.style.top="0px";
    }
}
hamburger.addEventListener("click", change);

const gback = () =>
{
    hamburger.classList.remove("hamburger--active");
    nav.classList.remove("navigation--active");
}
all.addEventListener("click", gback);
//hamburger.addEventListener("click", gback)
//addedfooter.addEventListener("click",gback);
footer.addEventListener("click", gback);
logo.addEventListener("click", gback);
