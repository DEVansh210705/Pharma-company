// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {
    // Hide the preloader after a short delay
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    }, 2000); // Change this value to adjust how long the preloader is displayed
  });
  