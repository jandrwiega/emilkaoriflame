const logobox = document.querySelector(".logo__box");
const wrapper = document.querySelector(".wrapper");
const imagelogo = document.querySelector(".logoimage");
let logoboxposition = logobox.offsetTop;
let screenwindows = window.innerWidth;
console.log(logoboxposition);
function changelogoposition()
{
    logoboxposition = logobox.offsetTop;
    console.log(logoboxposition); 
    if(logoboxposition > 0)
    {
        logobox.style.height="100px";
        imagelogo.style.height="80px";
        logobox.style.transition="all .3s .2s ease-in-out";
        imagelogo.style.tansition="height .3s .2s ease-in-out";
    }
    else
    {
        if(screenwindows > 799)
        {
            logobox.style.height="200px";
            imagelogo.style.height="180px";
        }
        else if(screenwindows <= 799)
        {
        logobox.style.height="250px";
        imagelogo.style.height="230px";
        }
    }
}
 

