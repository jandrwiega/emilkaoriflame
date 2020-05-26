const categories = document.querySelectorAll(".kosmetyki__ctg");
const przyklad = document.querySelector("#p__box");
const kosbox = document.querySelector(".kosmetyki__box");
const blank = document.querySelector(".kosmetyki__blank");

let sizekat = przyklad.clientWidth;
//console.log(categories);


let heightofbox = sizekat + "px";
//console.log(heightofbox);
for (let i = 0; i < categories.length; i++)
{
categories[i].style.height=heightofbox;
}
blank.style.height=heightofbox;

document.body.onresize=()=>
{
    sizekat = przyklad.clientWidth; 
   // console.log(sizekat);
    heightofbox = sizekat + "px";
    //console.log(heightofbox);
    for (let i = 0; i < categories.length; i++)
    {
    categories[i].style.height=heightofbox;
    }
    blank.style.height=heightofbox;
};