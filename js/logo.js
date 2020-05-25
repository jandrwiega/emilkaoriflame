const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const all = document.querySelector(".content__box");
const footer = document.querySelector(".footer__box");
const logo = document.querySelector(".logo__box--photo");
const hamburgerbox = document.querySelector(".logo__hamburger");
const allbox = document.querySelector(".wrapper");
const optionbox = document.querySelector(".logo__box--hamburger");
let topposition = hamburgerbox.offsetTop;
let screenwindow = window.innerWidth;
let photoposition = ((screenwindow - 200)/2)+"px";
//logo.style.paddingLeft=photoposition;
if(screenwindow > 799)
{
 logo.style.paddingLeft=photoposition;
}
else
{
    logo.style.paddingLeft="4%";
}
function bodyresize()
{
    screenwindow = window.innerWidth;
    if(screenwindow > 799)
    {
     photoposition = ((screenwindow - 200)/2) + "px";
     logo.style.paddingLeft=photoposition;
    }
    else
    {
        logo.style.paddingLeft="4%";
    }
    
}
const change = () =>
{
    hamburger.classList.toggle("hamburger--active");
    nav.classList.toggle("navigation--active");
    hamburgerbox.style.position="relative";
    topposition = hamburgerbox.offsetTop;
    console.log(topposition);
   if(topposition == 25 || topposition == 35)
    {
        if(screenwindow < 800)
        {
        hamburgerbox.style.top="-25px";
        }
        else
        {
            hamburgerbox.style.position="relative";
           hamburgerbox.style.top="-25px";
            
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
    topposition = hamburgerbox.offsetTop;
    if(screenwindow > 800)
    {
    hamburgerbox.style.top="0px";
    }
}
all.addEventListener("click", gback);
footer.addEventListener("click", gback);
logo.addEventListener("click", gback);
