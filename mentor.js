const images = ["2.jpg", "3.jpg", "OIG.jpg"]; // Add your image file names
const imageElement = document.getElementById("changing-image");
let currentIndex = 0;
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.style.opacity = 0;
  
    setTimeout(() => {
      imageElement.src = images[currentIndex];
      imageElement.style.opacity = 1;
    }, 1000); // Change images every 5 seconds (5000 milliseconds)
  }
  
  // Initial call to start the image change process
  changeImage();
  
  // Set an interval to change images every 5 seconds
  setInterval(changeImage, 5000);

  
  
  
  
  
  