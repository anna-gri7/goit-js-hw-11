// import { serverApi } from "./pixabay-api"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


export const createGallery = async (images) => {
    const findList = document.querySelector('.gallery');
    
    const addMarkup = images.map(image => {
        return `<li class = "gallery-item">
         <a class="gallery-link" href="${image.largeImageURL}">
           <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>
  <ul class="img-info">
  <li class="img-info-item">
  <span class="info-span">likes:</span>
  <span>${image.likes}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">views:</span>
  <span>${image.views}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">comments:</span>
  <span> ${image.comments}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">downloads:</span>
  <span> ${image.downloads}</span>
  </li>
        </ul>`
    
    }).join('');
    findList.innerHTML = addMarkup;
    lightbox.refresh();
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})


export const clearGallery = () => {
    const findList = document.querySelector('.gallery');
    findList.innerHTML = "";
}


export const showLoader = () => {
    const findLoader = document.querySelector('.loader');
    findLoader.classList.add('is-visible');
}

export const hideLoader = () => {
    const findLoader = document.querySelector('.loader');
    findLoader.classList.remove('is-visible');
}
  





// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень