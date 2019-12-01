import * as crud from "/js/crud.js";

const elementMain = document.getElementsByTagName("main")[0];
const elementMenuTag = document.getElementById("menuTag");
const elementNotasSelected = document.getElementById("notasSelected");
const elementNota = document.getElementById("nota");
const elementMenu = document.getElementById("menu");

const creaArrayElementLi = arrayLi => {
  return arrayLi.map(element => {
    const elementLi = document.createElement("li");
    const elementA = document.createElement("a");
    elementA.setAttribute("href", "#");
    elementA.setAttribute("title", `Notas con ${element}`);
    elementA.textContent = element;
    elementLi.appendChild(elementA);
    return elementLi;
  });
};

const handleClickMenu = e => {
  console.log("MENU", elementNotasSelected.classList.contains("hideMenu"));
  if (
    !elementNotasSelected.classList.contains("hideMenu") &&
    !elementNotasSelected.classList.contains("showMenu")
  ) {
    elementNotasSelected.classList.add("hideMenu");
  } else {
    if (elementNotasSelected.classList.contains("hideMenu")) {
      elementNotasSelected.classList.replace("hideMenu", "showMenu");
    } else {
      elementNotasSelected.classList.replace("showMenu", "hideMenu");
    }
  }
};

// MAIN
const arrayElementLi = creaArrayElementLi(crud.hashTags);
for (let element of arrayElementLi) {
  const elementUl = elementMenuTag.getElementsByTagName("ul");
  elementUl[0].appendChild(element);
}

const arrayElementsNotas = crud.fetchAll(crud.notesHashTags);
for (let element of arrayElementsNotas) {
  const elementUl = elementNotasSelected.getElementsByTagName("ul");
  elementUl[0].appendChild(element);
}

elementMenu.addEventListener("click", handleClickMenu);
