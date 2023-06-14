const tableArr = [
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
  let headID = thCreation("ID");
  headID.classList = "headID";
  headID.dataset.type = "number";
  let headName = thCreation("Название");
  headName.dataset.type = "string";
  headName.classList = "headName";
  let headCost = thCreation("Цена");
  headCost.dataset.type = "number";
  headCost.classList = "headCost";
  linea.append(headID);
  linea.append(headName);
  linea.append(headCost);

  tableFragment.append(table);
  return tableFragment;
}

let out = document.querySelector(".out");
out.append(tableCreation());

let tbody = document.querySelector("tbody");

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

function fillTable() {
  for (let i = 0; i < tableArr.length; i++) {
    let newlinea = document.createElement("tr");
    newlinea.append(rowFilling("tdID", tableArr[i].id));
    newlinea.append(rowFilling("tdName", tableArr[i].name));
    newlinea.append(rowFilling("tdCost", tableArr[i].cost));
    newlinea.append(rowFilling("tdDelete", "x"));
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
let currentID;
tdIDNumb.forEach((element) => {
  currentID = Number(element.innerHTML) + 1;
});
formId.value = currentID;
const formButton = document.querySelector(".form-btn");
const formInput = document.querySelectorAll(".form-input");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  const fragment = new DocumentFragment();
  const valueID = formId.value;
  const valueName = formName.value;
  const valueCost = formCost.value;
  const tr = document.createElement("tr");
  const tdDelete = document.createElement("td");
  tdDelete.innerHTML = "x";
  tdDelete.classList = "tdDelete";
  const Tbody = document.querySelector("tbody");
  tr.append(tdCreation("tdID", valueID));
  tr.append(tdCreation("tdName", valueName));
  tr.append(tdCreation("tdCost", valueCost));
  tr.append(tdDelete);
  fragment.append(tr);

  Tbody.append(fragment);

  currentID++;
  formId.value = currentID;
  let newObjectsTableArr = { id: valueID, name: valueName, cost: valueCost };
  tableArr.push(newObjectsTableArr);
  formName.value = "";
  formCost.value = "";
});

let tBody = document.querySelector("tbody");
tBody.addEventListener("click", (e) => {
  const target = e.target;
  const parentnOde = target.parentNode;
  target.parentNode.remove(parentnOde);
});
