const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

export const lightboxItems = (e) => {
  if (e.target.className === "fa-plus") {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    let parentEvent = e.target.parentNode.parentNode;
    let img = parentEvent.querySelector("img").getAttribute("src");
    lightboxImg.src = img;
  }
};

export const lightboxClose = () => {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
};
