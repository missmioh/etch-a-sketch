const container = document.querySelector("#container");

const button = document.querySelector("button");

button.addEventListener('click', () => {
    let choice = prompt("Please enter desired amount of squares up to 100", "16");

    if (choice != null && choice <= 100) {
        removeGrid();
        sizeGrid(choice);
    } else if (choice > 100) {
        alert("Error, please choose a number smaller than 100");
    } else {
        alert("Please choose numbers only!");
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
    grid.style.width = `${100 / num}%`;
    
    let state = 0.1;

    grid.addEventListener("mouseover", () => {
        if (state > 1) return;
        let getR = getRandomColor();
        let getG = getRandomColor();
        let getB = getRandomColor();
        grid.style.backgroundColor = `rgb(${getR}, ${getG}, ${getB})`;
        grid.style.opacity = state;
        state += 0.1;
    });

    container.appendChild(grid);
    i++;
    } while (i <= (num * num));
};

function getRandomColor() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(255);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

sizeGrid(16);