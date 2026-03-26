import{a as c,S as d,i}from"./assets/vendor-DQvd0HNi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const f=c.create({baseURL:"https://pixabay.com/api/",params:{key:"55176910-b129664d9c533e9cf4d6ff537",image_type:"photo",orientation:"horizontal",safesearch:!0}}),p=t=>f.get("",{params:{q:t}}).then(e=>e.data).catch(e=>{throw console.error(e),e}),u=t=>{const e=document.querySelector(".gallery");if(!e)return;const a=t.map(o=>`<li class = "gallery-item">
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
        </ul> </li>`).join("");e.innerHTML=a,m.refresh()},m=new d(".gallery a",{captionsData:"alt",captionDelay:250}),g=()=>{const t=document.querySelector(".gallery");t.innerHTML=""},y=()=>{document.querySelector(".loader").classList.add("is-visible")},l=()=>{document.querySelector(".loader").classList.remove("is-visible")},h=document.querySelector("form");h.addEventListener("submit",t=>{t.preventDefault();const e=t.currentTarget.elements["search-text"].value.trim();e!==""&&(g(),y(),p(e).then(a=>{if(l(),a.hits.length===0)return i.error({message:`Sorry, there are no images matching your search ${e}. Please try again!`,messageColor:"white",position:"topRight"});u(a.hits)}).catch(a=>(l(),i.error({message:"ERROR",messageColor:"red",position:"topRight"}))))});
//# sourceMappingURL=index.js.map
