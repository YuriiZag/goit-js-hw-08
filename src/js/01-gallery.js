// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

console.log(galleryRef)

const additoinList = galleryItems.map(item => {



    return `<a href="${item.original}"><img src="${item.preview}" alt="${item.description}"></img></a>`;
}).join('');

console.log(additoinList);
galleryRef.insertAdjacentHTML('beforeend', additoinList);

const gallery = new SimpleLightbox('.gallery a' ,{captionsData: 'alt',captionsDelay: '250s'});