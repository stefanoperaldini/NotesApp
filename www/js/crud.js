const hashTags = ["#Tag1", "#Tag2", "#Tag3", "#Tag4", "#Tag5", "#Tag6"];

const notesHashTags = [
  {
    notaHashTags: ["#Tag1", "#Tag2"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag1", "#Tag2"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag1", "#Tag3"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag1", "#Tag4"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag2"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag3"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag4"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag5"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  },
  {
    notaHashTags: ["#Tag6"],
    notaTitle: "Lorem, ipsum dolor.",
    notaText:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, nisi odit repellendus, ex vel, at libero quos architecto assumenda asperiores atque.Aliquam libero et modi voluptatibus adipisci quia necessitatibus provident!"
  }
];

const fetchAll = arrayLi => {
  return arrayLi.map(element => {
    const elementLi = document.createElement("li");
    const elementH3 = document.createElement("h3");
    const elementA = document.createElement("a");
    elementA.setAttribute("href", "#");
    elementA.setAttribute(
      "title",
      "Nota con " + element.notaHashTags.join(", ")
    );
    elementA.textContent = element.notaTitle;
    elementH3.appendChild(elementA);
    const elementP = document.createElement("p");
    elementP.textContent = element.notaText;
    elementLi.appendChild(elementH3);
    elementLi.appendChild(elementP);
    return elementLi;
  });
};

const createN = () => {
  console.log("CRATE");
};

const readN = () => {
  console.log("READ");
};

const updateN = () => {
  console.log("UPDATE");
};

const deleteN = () => {
  console.log("DELETE");
};

export { hashTags, notesHashTags, fetchAll, createN, readN, updateN, deleteN };
