const container = document.querySelector("#container");

let i = 1;

do {
let grid = document.createElement("div");
grid.setAttribute("class", "square");
container.appendChild(grid);
i++;
} while (i <= 256);

let squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = "green";    
    });
});

const button = document.querySelector("button");

button.addEventListener('click', () => {
    let choice = prompt("Please enter desired grid size up to 100", "16");

    if (choice != null && choice <= 100) {
        console.log(choice);
        removeGrid();
        sizeGrid(choice);
    } else if (choice > 100) {
        console.log("Error, please choose a number smaller than 100");
    }
});

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}; 

function sizeGrid(num) { 
    let i = 1;

    do {
    let grid = document.createElement("div");
    grid.setAttribute("class", "square");
    container.appendChild(grid);
    i++;
    } while (i <= (num * num));
};