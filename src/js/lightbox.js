const close = document.querySelector(".close-lightbox");

close.addEventListener("click", (e) => {
  document.querySelector(".lightbox").style.display = "none";
});
