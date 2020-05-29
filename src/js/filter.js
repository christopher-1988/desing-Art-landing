//declaracion de variabñes

const itemsImg = document.querySelector(".porfolio__galery").children;

export const filter = (e, ul) => {
  const list = ul.querySelectorAll("li");

  if (e.target.className === "") {
    list.forEach((e) => {
      if (e.className === "active") {
        e.classList.remove("active");
      }
    });

    //capturandon quien disparo el eveneto
    let Target = e.target;
    //agregando la clase a quien disparo el evento
    Target.classList.add("active");

    let selectAct = Target.getAttribute("data-target");

    const imgItems = [...itemsImg];

    imgItems.forEach((item) => {
      let items = item.getAttribute("data-id");

      item.style.display = items === selectAct ? "block" : "none";

      item.style.display = selectAct == "all" && "block";
    });
  }
};
