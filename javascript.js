// ACCESS & STYLE the div component of html document
const container = document.querySelector("#flex-container");
container.setAttribute("style", "display: flex; background-color: coral; justify-content: center; padding: 10px; flexGrow: 1; flex-direction: column; align-items: center;")

// CREATE 16 square div elements in a single row
function createRow () {
let i = 0;
let row = document.createElement("div");
row.setAttribute("style", "display: flex;")
while (i < 16) {
    const square = document.createElement("div");
    square.classList.add("grid");
    square.setAttribute("style", "flex: none; margin: 4px; height: 50px; width: 50px; background-color: white;");
    row.appendChild(square);
    i++;
}
container.appendChild(row);
}

// CALL function for 16 single rows of 16 square div elements
row01 = createRow();
row02 = createRow();
row03 = createRow();
row04 = createRow();
row05 = createRow();
row06 = createRow();
row07 = createRow();
row08 = createRow();
row09 = createRow();
row10 = createRow();
row11 = createRow();
row12 = createRow();
row13 = createRow();
row14 = createRow();
row15 = createRow();
row16 = createRow();

// ADD 'hover' effect to each square element
const grid = document.querySelectorAll(".grid");
for (const square of grid) {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "coral"
    })
    square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "red"
    })
}