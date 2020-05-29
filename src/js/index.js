import { scroll } from "./scroll.js";
import { lazyload } from "./lazyload.js";
import { filter } from "./filter.js";
import { lightboxItems, lightboxClose } from "./lightbox.js";

scroll();
lazyload();

//-------------------metodo lightbox------------------------------
const ul = document.querySelector("#filter");
ul.addEventListener("click", (e) => {
  filter(e, ul);
});
//-------------------metodo lightbox------------------------------
const lightboxImg = document.querySelector(".porfolio__galery");
const lightboxBtnClose = document.querySelector(".close-lightbox");

lightboxImg.addEventListener("click", (e) => {
  lightboxItems(e);
});
lightboxBtnClose.addEventListener("click", (e) => {
  lightboxClose();
});

/*-----------------------------------------------------------*/
const nav = document.querySelector(".nav");

nav.addEventListener("click", (e) => {
  let Target = e.target;
  let list = nav.querySelectorAll("li a");

  Target.className === "" &&
    list.forEach((e) => {
      e.className === "active" && e.classList.remove("active");
    });
  //agregando la clase a quien disparo el evento
  Target.classList.add("active");
});
