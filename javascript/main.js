const aa = document.querySelectorAll('.carousel-item');
let carouselIndex = 0;
let nextIndex = 1;

function changeItem()
{
    console.log(nextIndex);
    aa[carouselIndex].classList.remove('active');


    if(nextIndex >= aa.length-1)
    {
        nextIndex = -1;
    }

    setTimeout(function () {
        aa[carouselIndex].classList.add('slide-lft');
        aa[nextIndex].classList.add('active');
    }, 2500);
    aa[carouselIndex].classList.remove('slide-lft');
    
    

    if(carouselIndex >= aa.length-1)
    {
        carouselIndex = -1;
    }
    
    carouselIndex += 1;
    nextIndex += 1;
    aa[carouselIndex].classList.add('active');
    setTimeout(changeItem, 3000);
}


changeItem();

console.log(aa);