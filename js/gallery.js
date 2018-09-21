// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  //alert("Hello from the gallery file!");
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");
  
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
        // Preload large images.
        let newImageSrc  = thumbnail.dataset.largeVersion;
        let largeVersion = new Image();
        largeVersion.src = newImageSrc;

    thumbnail.addEventListener("click", function() {
      // code to set clicked image as main image      
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.dataset.title;
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);
      // update aside title and description
      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
      // Change which image is current by moving shadow box
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
    });
  });             
}
