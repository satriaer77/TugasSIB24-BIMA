const carouselItems = document.querySelectorAll('.carousel-item');
let carouselIndex = 0;
let nextIndex = 1;

function changeItem()
{
    console.log(nextIndex);
    carouselItems[carouselIndex].classList.remove('active');


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
    setTimeout(changeItem, 3000);
}


changeItem();

console.log(carouselItems);


