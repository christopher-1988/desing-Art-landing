//declaracion de variabñes
const ul = document.querySelector("#filter");
const items = document.querySelector(".porfolio__galery").children;

ul.addEventListener("click", (e) => {
  if (e.target.className === "") {
    const list = ul.querySelectorAll("li");
    list.forEach((e) => {
      if (e.className === "active") {
        e.classList.remove("active");
      }
    });
    //capturandon quien disparo el eveneto
    let trget = e.target;
    //agregando la clase a quien disparo el evento
    trget.classList.add("active");

    let act = trget.getAttribute("data-target");

    const itemsArray = [...items];

    itemsArray.forEach((item) => {
      let it = item.getAttribute("data-id");
      if (it === act) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
      if (act == "all") {
        item.style.display = "block";
      }
    });
  }
});

/* function on(eventName, selector, handler) {
  document.addEventListener(
    eventName,
    function (event) {
      const elements = document.querySelectorAll(selector);
      const path = event.composedPath();
      path.forEach(function (node) {
        elements.forEach(function (elem) {
          if (node === elem) {
            handler.call(elem, event);
          }
        });
      });
    },
    true
  );
} */
