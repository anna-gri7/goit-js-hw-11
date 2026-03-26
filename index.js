import{a as c,S as d,i}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p=c.create({baseURL:"https://pixabay.com/api/",params:{key:"55176910-b129664d9c533e9cf4d6ff537",image_type:"photo",orientation:"horizontal",safesearch:!0}}),f=async s=>p.get("",{params:{q:s}}).then(r=>r.data),u=async s=>{const r=document.querySelector(".gallery"),a=s.map(o=>`<li class = "gallery-item">
         <a class="gallery-link" href="${o.largeImageURL}">
           <img
      class="gallery-image"
      src="${o.webformatURL}"
      alt="${o.tags}"
    />
  </a>
  <ul class="img-info">
  <li class="img-info-item">
  <span class="info-span">likes:</span>
  <span>${o.likes}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">views:</span>
  <span>${o.views}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">comments:</span>
  <span> ${o.comments}</span>
  </li>
  <li class="img-info-item">
  <span class="info-span">downloads:</span>
  <span> ${o.downloads}</span>
  </li>
        </ul>`).join("");r.innerHTML=a,m.refresh()},m=new d(".gallery a",{captionsData:"alt",captionDelay:250}),g=()=>{const s=document.querySelector(".gallery");s.innerHTML=""},y=()=>{document.querySelector(".loader").classList.add("is-visible")},l=()=>{document.querySelector(".loader").classList.remove("is-visible")},h=document.querySelector("form");h.addEventListener("submit",s=>{s.preventDefault(),g(),y();const r=s.currentTarget.elements["search-text"].value.trim();f(r).then(a=>{if(l(),a.hits.length===0)return i.error({message:`Sorry, there are no images matching your search ${r}. Please try again!`,messageColor:"white",position:"topRight"});u(a.hits)}).catch(a=>(l(),i.error({message:"ERROR",messageColor:"red",position:"topRight"})))});
//# sourceMappingURL=index.js.map
