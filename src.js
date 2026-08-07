// src.js
// 8-7-2026
// cortezij

// get the container for the grid
const grid = document.getElementById("container");

// generate the cells
const gridSize = 16;
const totalCells = gridSize * gridSize;

// loop to create the cells
// only a single loop is needed
// will use flexbox to handle the rows and columns
for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // add the event listeners while each cell is being created
    // one for mouseenter and one for mouse leave
    // when the mouse enters a cell its background color will change
    cell.addEventListener("mouseenter", () => {
        cell.classList.add("hovered");
    });

    cell.addEventListener("mouseleave", () => {
        cell.classList.remove("hovered");
    });
    
    grid.appendChild(cell);
}
