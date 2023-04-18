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
let dataHead1 = document.createElement("th");
let dataHead2 = document.createElement("th");
let dataHead3 = document.createElement("th");
dataHead1.innerHTML = "ID";
dataHead2.innerHTML = "Название";
dataHead3.innerHTML = "Цена";
linea.append(dataHead1);
linea.append(dataHead2);
linea.append(dataHead3);

let fragment = new DocumentFragment();

let sss = tableArr.map((table) => table.name);
console.log(sss);
for (let i = 0; i < tableArr.length; i++) {
  let newlinea = document.createElement("tr");
  tbody.append(newlinea);
  let mapID = tableArr.map((table) => table.id);
  let mapName = tableArr.map((table) => table.name);
  let mapCost = tableArr.map((table) => table.cost);

  let newtd1 = document.createElement("td");
  let newtd2 = document.createElement("td");
  let newtd3 = document.createElement("td");
  newtd1.innerHTML = mapID[i];
  newtd2.innerHTML = mapName[i];
  newtd3.innerHTML = mapCost[i];
  newlinea.append(newtd1);
  newlinea.append(newtd2);
  newlinea.append(newtd3);
}
// let sss = tableArr.forEach((her, i, arr) =>

//   alert(her.name + ":" + her.cost + ":" + her.id)
// );

// for (let i = 0; i < tableArr.length; i++) {
//   let tdtest = document.createElement("td");
//   newlinea.append(tdtest);

//   tdtest.innerHTML = test22[i];
//   let newlinea2 = document.createElement("tr");
//   tbody.append(newlinea2);
// }
// let test22 =
