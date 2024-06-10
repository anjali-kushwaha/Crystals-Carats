
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
   
function showImage(index) {
        images.forEach((img, idx) => {
            img.classList.toggle('active', idx === index);
        });
}
   
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
}
   
    
showImage(currentIndex);
setInterval(nextImage, 2000);