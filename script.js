const container = document.querySelector("#container");

let i = 0;

do {
i++;
const grid = document.createElement("div");
container.appendChild(grid);
// grid.textContent = `test`;
} while (i <= 256 );