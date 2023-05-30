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

// let papa = " ";
// for (let i = 0; i < tableArr.length; i++) {
//   let brat = document.createElement("div");
//   brat.innerHTML = tableArr[i].id + tableArr[i].name;
//   document.body.append(brat);
// }
// console.log(papa);

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
  headID.dataset.type = "number";
  let headName = thCreation("Название");
  headName.dataset.type = "string";
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

function tdCreation(classlist) {
  let td = document.createElement("td");
  td.classList = classlist;

  return td;
}

function fillTable() {
  for (let i = 0; i < tableArr.length; i++) {
    let newlinea = document.createElement("tr");
    let tdID = tdCreation("tdID");
    tdID.innerText = tableArr[i].id;
    newlinea.append(tdID);
    let tdName = tdCreation("tdName");
    tdName.innerText = tableArr[i].name;
    newlinea.append(tdName);
    let tdCost = tdCreation("tdCost");
    tdCost.innerText = tableArr[i].cost;
    newlinea.append(tdCost);
    tbody.append(newlinea);
  }
}
fillTable();
// let thClick = document.querySelector("tr");
// thClick.addEventListener("click", clickFunc);
// function clickFunc(event) {
//   if (event.altKey && event.shiftKey) {
//     console.log("ss");
//   }
// }
// let mapID = tableArr.map((table) => table.id);
// function test2() {
//   for (let i = 0; i < tableArr.length; i++) {
//     console.log(mapID[i + 1]);
//     if (mapID[i] > mapID[i + 1]) {
//       const test11 = mapID[i];
//       mapID[i] = mapID[i + 1];
//       mapID[i + 1] = test11;
//     }
//   }
// }

/*
const table = document.querySelector("table");
const ths = table.querySelectorAll("th");
const Tbody = table.querySelector("tbody");

ths.forEach((th) => {
  th.addEventListener("click", () => {
    const column = th.cellIndex;
    const rows = Array.from(Tbody.querySelectorAll("tr"));

    rows.sort((a, b) => {
      const textA = a.querySelectorAll("td")[column].textContent;
      const textB = b.querySelectorAll("td")[column].textContent;
      return textA.localeCompare(textB, undefined, { numeric: true });
    });

    Tbody.innerHTML = "";

    rows.forEach((row) => {
      Tbody.appendChild(row);
    });
  });
});
 */

const table = document.querySelector("table");
table.onclick = function (e) {
  if ((e.target.tagName = "TH")) {
    let th = e.target;

    sortable(th.cellIndex, th.dataset.type, "table");
  }
};
function sortable(colNum, type, id) {
  let elem = document.querySelector(id);
  let Tbody = elem.querySelector("tbody");
  let rowsArray = Array.from(Tbody.rows);

  let compare;
  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }
  rowsArray.sort(compare);
  Tbody.append(...rowsArray);
}
