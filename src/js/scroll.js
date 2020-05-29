//declaracion de variables
const header = document.querySelector("header");

export const scroll = (window.onscroll = () => {
  let scrolltop = document.documentElement.scrollTop;
  if (window.innerWidth > 992) {
    if (scrolltop > 100) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }
});
