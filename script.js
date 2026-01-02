const container = document.querySelector("#container");

let i = 1;

do {
const grid = document.createElement("div");
grid.setAttribute("class", "squares");
container.appendChild(grid);
i++;
} while (i <= 256);