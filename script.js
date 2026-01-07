const container = document.querySelector("#container");

let i = 1;

do {
let grid = document.createElement("div");
grid.setAttribute("class", "squares");
container.appendChild(grid);
i++;
} while (i <= 256);

let squared = document.querySelectorAll(".squares");

squared.forEach(squares => {
    squares.addEventListener('mouseover', (e) => {
        squares.style.backgroundColor = "green";    
    });
});

const button = document.querySelector("button");

button.addEventListener('click', () => {
    let choice = prompt("Please enter desired grid size up to 100", "16");

    if (choice != null) {
        console.log(choice);
    }
});
