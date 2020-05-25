const logobox = document.querySelector(".logo__box");
const wrapper = document.querySelector(".wrapper");
const imagelogo = document.querySelector(".logoimage");
const content = document.querySelector(".content__box");
let logoboxposition = logobox.offsetTop;
let screenwindows = window.innerWidth;
console.log(logoboxposition);
function changelogoposition()
{
    logoboxposition = logobox.offsetTop;
    console.log(logoboxposition); 
    screenwindows = window.innerWidth;
    if(logoboxposition > 0)
    {
      // content.style.paddingTop="100px"; 
        content.style.transition="all .1s ease-in-out";
    }
    else
    {
        content.style.paddingTop="15px"; 
    }
}
 

