import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('')
}
const galleryMarkup = createGalleryItemsMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup)

    let gallery = new SimpleLightbox(".gallery a", {
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
        scrollZoom: false,
    });

console.log(galleryItems);
