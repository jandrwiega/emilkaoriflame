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
        if(screenwindows < 799)
        {
        logobox.style.height="100px";
        imagelogo.style.height="80px";
        content.style.paddingTop="80px";
        }
        else
        {
            logobox.style.height="130px";
            imagelogo.style.height="110px"; 
            content.style.paddingTop="15px";
        }
        
    }
    else
    {
        
        if(screenwindows < 799)
        {
        logobox.style.height="200px";
        imagelogo.style.height="180px";
        content.style.paddingTop="15px";
        }
        else
        {
            logobox.style.height="130px";
            imagelogo.style.height="110px"; 
            content.style.paddingTop="15px";
        }
    }
}
 

