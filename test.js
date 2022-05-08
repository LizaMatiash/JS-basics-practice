function swapImg(myImages,currentImage, container) {

  let newSlide = document.createElement('img');
  newSlide.src = `slides/${myImages[currentImage]}`;
  newSlide.className = 'fadeinim';
  container.appendChild(newSlide);

  if (container.children.length > 2){
    container.removeChild(container.children[0]);
  }
}


let currentImage = 0;
let myImages = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

let container = document.getElementById('content');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('previous');

nextBtn.addEventListener('click', function(event) {
  event.preventDefault();

  currentImage++;

  if (currentImage > (myImages.length - 1)) {
    currentImage = 0;
  }
  swapImg(myImages,currentImage, container);
})

prevBtn.addEventListener('click', function(event) {
  event.preventDefault();

  currentImage--;

  if (currentImage < 0) {
    currentImage = myImages.length - 1;
  }
    swapImg(myImages,currentImage, container);

})
