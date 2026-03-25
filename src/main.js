import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"; 

import { getImagesByQuery } from './js/pixabay-api'



const findForm = document.querySelector('form');

findForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = e.currentTarget.elements['search-text'].value;
    getImagesByQuery(query).then(res => {
        if (res.hits.length === 0) {
            return iziToast.error({
        message: `Sorry, there are no images matching your search ${query}. Please try again!`, messageColor: 'white',
            position: 'topRight',
    })} else {
            // тут прописати замальовку картинок 
        }
    } )
}
)

