const slides = document.querySelectorAll(".slide")
var count = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

const Prevbtn = () => {
    if(count == 0){
        count = slides.length-1;
        slideShow();
    }
    else{
    count--;
    slideShow();
    }
}
  
const Nextbtn = () => {
    if(count == slides.length-1){
        count = 0;
        slideShow();
    }
    else{
    count++;
    slideShow();
    }
}

const slideShow = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`;
        }
    )
} 


