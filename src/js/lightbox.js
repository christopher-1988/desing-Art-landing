const itemsPrt = document.querySelector(".porfolio__galery");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxClose = document.querySelector(".close-lightbox");

itemsPrt.addEventListener("click", (e) => {
  if (e.target.className === "fa-plus") {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    parentEvent = e.target.parentNode.parentNode;
    img = parentEvent.querySelector("img").getAttribute("src");
    lightboxImg.src = img;
  }
});

lightboxClose.addEventListener("click", (e) => {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
});
