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
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
document.body.append(table);
table.append(thead);
table.append(tbody);

let linea = document.createElement("tr");
thead.append(linea);
let headID = document.createElement("th");
let headName = document.createElement("th");
let headCost = document.createElement("th");
headID.innerHTML = "ID";
headName.innerHTML = "Название";
headCost.innerHTML = "Цена";
linea.append(headID);
linea.append(headName);
linea.append(headCost);

function tableRows() {
  let fragment = new DocumentFragment();
  let newlinea = document.createElement("tr");
  newlinea.insertAdjacentHTML("afterbegin", `<td class='tdFirst'> 1</td>`);
  newlinea.insertAdjacentHTML("beforeend", `<td class='tdSecond'> 2</td>`);
  newlinea.insertAdjacentHTML("beforeend", `<td class='tdThird'> 3</td>`);
  fragment.append(newlinea);
  return fragment;
}

function fillTable() {
  let mapID = tableArr.map((table) => table.id);
  let mapName = tableArr.map((table) => table.name);
  let mapCost = tableArr.map((table) => table.cost);
  for (let i = 1; i <= tableArr.length; i++) {
    tbody.append(tableRows());
    let columnID = document.querySelectorAll(".tdFirst");
    let columnName = document.querySelectorAll(".tdSecond");
    let columnCost = document.querySelectorAll(".tdThird");
    for (let k = 0; k < columnID.length; k++) {
      columnID[k].innerHTML = `№ ${mapID[k]}`;
      columnName[k].innerHTML = mapName[k];
      columnCost[k].innerHTML = mapCost[k];
    }
  }
}
fillTable();

let thClick = document.querySelector("tr");
thClick.addEventListener("click", clickFunc);
function clickFunc(event) {
  if (event.altKey && event.shiftKey) {
    console.log("ss");
  }
}
