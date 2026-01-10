const container = document.querySelector("#container");

const button = document.querySelector("button");

button.addEventListener('click', () => {
    let choice = Number(prompt("Please enter desired amount of squares up to 100", "16"));

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
    // container.innerHTML = "";
    // would also work just fine here
}; 

function sizeGrid(num) { 
    let i = 1;

    do {
    let grid = document.createElement("div");
    grid.classList.add("square");
    grid.style.width = `${100 / num}%`;
    
    let state = 0.1;

    grid.addEventListener("mouseover", () => {
        if (state > 1) return;
        
        if (state === 0.1) {
            grid.style.backgroundColor = getRandomRGB();
        }

        grid.style.opacity = state;
        state += 0.1;
    });

    container.appendChild(grid);
    i++;
    } while (i <= (num * num));
};

function getRandomValue() {
    return Math.floor(Math.random() * 256);
}

function getRandomRGB() {
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();

    return `rgb(${r}, ${g}, ${b})`;
}

sizeGrid(16);