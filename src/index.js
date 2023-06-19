import "./style.css";
let tableArr = [
  {
    id: 1,
    name: "The Lord of the Rings: The Return of the King",
    cost: 10,
  },
  {
    id: 2,
    name: "The Godfather",
    cost: 25,
  },
  {
    id: 3,
    name: "The Dark Knight",
    cost: 5,
  },
  {
    id: 4,
    name: "The Godfather: Part II",
    cost: 15,
  },
  {
    id: 5,
    name: "The Godfather: Part II",
    cost: 30,
  },
  {
    id: 6,
    name: "Schindler's List",
    cost: 20,
  },
  {
    id: 7,
    name: "The Godfather",
    cost: 45,
  },
  {
    id: 8,
    name: "The Shawshank Redemption",
    cost: 12,
  },
  {
    id: 9,
    name: "Pulp Fiction",
    cost: 18,
  },
  {
    id: 10,
    name: "The Godfather: Part II",
    cost: 8,
  },
];

function thCreation(content) {
  let th = document.createElement("th");
  th.innerText = content;

  return th;
}

function tableCreation() {
  let tableFragment = new DocumentFragment();
  let table = document.createElement("table");
  table.classList = table;
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  table.append(thead);
  table.append(tbody);

  let linea = document.createElement("tr");
  thead.append(linea);
  let headNumb = thCreation("#");
  let headID = thCreation("ID");
  headID.classList = "headID";
  headID.dataset.type = "number";
  let headName = thCreation("Название");
  headName.dataset.type = "string";
  headName.classList = "headName";
  let headCost = thCreation("Цена");
  headCost.dataset.type = "number";
  headCost.classList = "headCost";
  linea.append(headNumb);
  linea.append(headID);
  linea.append(headName);
  linea.append(headCost);

  tableFragment.append(table);
  return tableFragment;
}

let out = document.querySelector(".out");
out.append(tableCreation());

let tbody = document.querySelector("tbody");
let table = document.querySelector("table");

function tdCreation(classlist, value) {
  let td = document.createElement("td");
  td.classList = classlist;
  td.innerHTML = value;

  return td;
}
function rowFilling(classList, value) {
  let row = tdCreation(classList);
  row.innerText = value;
  return row;
}

function tableDelete(event) {
  console.log(event.target.dataset.id);
  tableArr = tableArr.filter((item) => {
    return item.id !== Number(event.target.dataset.id);
  });
  tbody.innerHTML = " ";
  fillTable();
}
// function tableDelete(event) {
//   console.log(event.target.dataset.id);
//   let index = tableArr.findIndex(
//     (n) => n.id === Number(event.target.dataset.id)
//   );
//   console.log(index);
//   if (index !== -1) {
//     console.log(tableArr.splice(index, 1));
//     tableArr.splice(index, 0);
//   }
//   tbody.innerHTML = " ";

//   fillTable();
//   console.log(tableArr);
// }
let currentID;

function fillTable() {
  for (let i = 0; i < tableArr.length; i++) {
    let newlinea = document.createElement("tr");
    newlinea.classList = "tableRows";
    newlinea.setAttribute("draggable", true);
    const buttonDelete = rowFilling("tdDelete", "x");
    newlinea.append(rowFilling("tdNumb", `${i + 1}.`));
    newlinea.append(rowFilling("tdID", tableArr[i].id));
    newlinea.append(rowFilling("tdName", tableArr[i].name));
    newlinea.append(rowFilling("tdCost", tableArr[i].cost));
    newlinea.append(buttonDelete);
    buttonDelete.dataset.id = tableArr[i].id;
    buttonDelete.addEventListener("click", tableDelete);
    tbody.append(newlinea);
  }
}
fillTable();

// tableArr.sort((a, b) => {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }
//   return 0;
// });

// console.log(tableArr);
const headCost = document.querySelector(".headCost");
const headName = document.querySelector(".headName");
const headID = document.querySelector(".headID");
let headCostState = true;
let headNameState = true;
let headIDState = true;
headCost.addEventListener("click", (e) => {
  if (headCostState) {
    tableArr.sort((a, b) => a.cost - b.cost);
  } else {
    tableArr.sort((a, b) => b.cost - a.cost);
  }
  headCostState = !headCostState;
  tbody.innerHTML = "";
  fillTable();
});
headName.addEventListener("click", (e) => {
  if (headNameState) {
    tableArr.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    tableArr.sort((a, b) => b.name.localeCompare(a.name));
  }
  headNameState = !headNameState;
  tbody.innerHTML = "";
  fillTable();
});
headID.addEventListener("click", (e) => {
  if (headIDState) {
    tableArr.sort((a, b) => a.id - b.id);
  } else {
    tableArr.sort((a, b) => b.id - a.id);
  }
  headIDState = !headIDState;
  tbody.innerHTML = "";
  fillTable();
});

const formId = document.querySelector("#form-ID");
const formName = document.querySelector("#form-Name");
const formCost = document.querySelector("#form-cost");
const tdIDNumb = document.querySelectorAll(".tdID");
// let currentID;
// tableArr.forEach((item) => {});
// tdIDNumb.forEach((element) => {
//   currentID = Number(element.innerHTML) + 1;
// });
// formId.value = currentID;

const formButton = document.querySelector(".js-formButton");
/* Заполни инпут */
let forInput = document.querySelectorAll(".form-input");
forInput.forEach((input) =>
  input.addEventListener("input", (e) => {
    if (formName.value !== "" && formCost.value !== "") {
      formButton.removeAttribute("disabled");
    }
  })
);

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  const fragment = new DocumentFragment();
  const valueID = tableArr.length + 1;
  const valueName = formName.value;
  const valueCost = formCost.value;
  const tr = document.createElement("tr");
  tr.classList = "tableRows";
  tr.setAttribute("draggable", true);
  const buttonDelete = rowFilling("tdDelete", "x");
  buttonDelete.dataset.id = currentID;
  buttonDelete.addEventListener("click", tableDelete);
  const Tbody = document.querySelector("tbody");
  tr.append(tdCreation("tdNumb", `${valueID}.`));
  tr.append(tdCreation("tdID", valueID));
  tr.append(tdCreation("tdName", valueName));
  tr.append(tdCreation("tdCost", valueCost));
  tr.append(buttonDelete);
  fragment.append(tr);

  Tbody.append(fragment);
  formButton.setAttribute("disabled", true);
  currentID++;
  // formId.value = currentID;
  let newObjectsTableArr = {
    id: Number(valueID),
    name: valueName,
    cost: valueCost,
  };

  tableArr.push(newObjectsTableArr);
  formName.value = "";
  formCost.value = "";
});

// let tBody = document.querySelector("tbody");
// tBody.addEventListener("click", (e) => {
//   if (e.target.matches(".tdDelete")) {
//     const target = e.target;
//     const parentnOde = target.parentNode;
//     target.parentNode.remove(parentnOde);
//   }
// });

// let originalArray = [
//   { name: "John", age: 23, color: "red" },
//   { name: "Ann", age: 21, color: "blue" },
//   { name: "Mike", age: 13, color: "green" },
// ];

// let filteredArray = originalArray.filter((value) => value.age > 18);

// let originalArray = [1, 2, 3, 4, 5];
// let filteredArray = originalArray.filter((value, index) => index !== 2);
// console.log(filteredArray);
// let arr = [
//   { id: 7, name: "2" },
//   { id: 1, name: "1" },
//   { id: 4, name: "2" },
//   { id: 2, name: "2" },
//   { id: 3, name: "3" },
// ];

// function removeObjectById(arr, id) {
//   const index = arr.findIndex((n) => n.id === id);
//   if (index !== -1) {
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// console.log(removeObjectById(tableArr, 3));

// const tableRows = document.querySelectorAll(".tableRows");
// tableRows.forEach((rows) => {
//   rows.addEventListener("dragstart", (event) => {
//     event.target.classList.add(`selected`);
//   });
// });
// tableRows.forEach((rows) => {
//   rows.addEventListener("dragend", (event) => {
//     event.target.classList.remove("selected");
//   });
// });

// tbody.addEventListener("dragover", (event) => {
//   // Разрешаем сбрасывать элементы в эту область
//   event.preventDefault();
//   // Находим перемещаемый элемент
//   const activeElement = tbody.querySelector(`.selected`);
//   // Находим элемент, над которым в данный момент находится курсор
//   const currentElement = event.target;
//   // Проверяем, что событие сработало:
//   // 1. не на том элементе, который мы перемещаем,
//   // 2. именно на элементе списка
//   const isMoveable =
//     activeElement !== currentElement &&
//     currentElement.classList.contains(`tableRows`);
//   // Если нет, прерываем выполнение функции
//   if (!isMoveable) {
//     return;
//   }
//   // Находим элемент, перед которым будем вставлять
//   const nextElement =
//     currentElement === activeElement.nextElementSibling
//       ? currentElement.nextElementSibling
//       : currentElement;
//   // Вставляем activeElement перед nextElement
//   tbody.insertBefore(activeElement, nextElement);
// });

const tasksListElement = document.querySelector("table");

const taskElements = tasksListElement.querySelectorAll(`.tdID`);

// Перебираем все элементы списка и присваиваем нужное значение
for (const task of taskElements) {
  task.draggable = true;
}
tasksListElement.addEventListener(`dragstart`, (evt) => {
  evt.target.classList.add(`selected`);
});

tasksListElement.addEventListener(`dragend`, (evt) => {
  evt.target.classList.remove(`selected`);
});
tasksListElement.addEventListener(`dragover`, (evt) => {
  // Разрешаем сбрасывать элементы в эту область
  evt.preventDefault();

  // Находим перемещаемый элемент
  const activeElement = tasksListElement.querySelector(`.selected`);
  // Находим элемент, над которым в данный момент находится курсор
  const currentElement = evt.target;
  // Проверяем, что событие сработало:
  // 1. не на том элементе, который мы перемещаем,
  // 2. именно на элементе списка
  const isMoveable = activeElement !== currentElement;

  // Если нет, прерываем выполнение функции
  if (!isMoveable) {
    return;
  }

  // Находим элемент, перед которым будем вставлять
  const nextElement =
    currentElement === activeElement.nextElementSibling
      ? currentElement.nextElementSibling
      : currentElement;

  // Вставляем activeElement перед nextElement
  tasksListElement.insertBefore(activeElement, nextElement);
});
