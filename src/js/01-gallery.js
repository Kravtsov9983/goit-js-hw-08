// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line

function createDiv(array) {
    return array.reduce((acc, item) => acc + `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`, "")
}

const div = document.querySelector(".gallery")
div.insertAdjacentHTML("beforeend", createDiv(galleryItems) )


new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt"
})