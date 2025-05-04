//|> Gallery
const gallery = document.querySelector('.gallery-section');
let scrollAmount = 0;
let scrollStep = 1;

function autoScrollGallery() {
  scrollAmount += scrollStep;
  gallery.scrollLeft = scrollAmount;

  if (scrollAmount >= gallery.scrollWidth - gallery.clientWidth) {
    scrollAmount = 0;
  }
}

setInterval(autoScrollGallery, 20);
