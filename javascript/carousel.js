const carouselItems = document.querySelectorAll('.carousel-item');
var carouselDot     = document.querySelector('#carouselDots');
let carouselIndex   = 0;
let nextIndex       = 1;


for(let i=0; i < carouselItems.length;i++)
{
    carouselDot.insertAdjacentHTML("afterbegin", `<span id=${i}></span>`);
}
const carouselDt = document.querySelectorAll('#carouselDots span');


console.log(carouselDt);
function changeItem()
{
    console.log(nextIndex);
    carouselItems[carouselIndex].classList.remove('active');
    carouselDt[carouselIndex].classList.remove('active');


    if(nextIndex >= carouselItems.length-1)
    {
        nextIndex = -1;
    }

    setTimeout(function () {
        carouselItems[carouselIndex].classList.add('slide-lft');
        carouselItems[nextIndex].classList.add('active');
    }, 2500);
    carouselItems[carouselIndex].classList.remove('slide-lft');
    
    

    if(carouselIndex >= carouselItems.length-1)
    {
        carouselIndex = -1;
    }
    
    carouselIndex += 1;
    nextIndex += 1;
    carouselItems[carouselIndex].classList.add('active');
    carouselDt[carouselIndex].classList.add('active');
    setTimeout(changeItem, 3000);
}

changeItem();

console.log(carouselItems);


