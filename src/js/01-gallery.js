// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

function createDiv(array) {
    return array.reduce((acc, item) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`, "")
}

const div = document.querySelector(".gallery")
div.insertAdjacentHTML("beforeend", createDiv(galleryItems) )

div.addEventListener("click", divHendler)

function divHendler(e) {
    e.preventDefault()
  const description = e.target.dataset.source;
    const modal = basicLightbox.create(
    `<img src = "${description}" width="800" height="600">`,
    {
      onShow: () => window.addEventListener(`keydown`, onPressKeyESC),
      onClose: () => window.removeEventListener(`keydown`, onPressKeyESC)
    }
  )
  modal.show();
  
  function onPressKeyESC(e) {
    if (e.code === `Escape`) {
      modal.close();
    }
  }
}
