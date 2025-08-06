// ACCESS & STYLE the div component of html document
const container = document.querySelector("#flex-container");
container.setAttribute("style", "display: flex; height: 400; background-color: coral; justify-content: center; padding: 10px; flexGrow: 1; flex-direction: column; align-items: center;")

// CREATE specified # square div elements with hover interaction in a single row
function createRow (number) {
let i = 0;
let row = document.createElement("div");
row.setAttribute("style", "display: flex;")
while (i < number) {
    const square = document.createElement("div");
    square.classList.add("grid");
    square.setAttribute("style", "flex: none; margin: 4px; height: 40px; width: 40px; background-color: white;");
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "coral"
    })
    square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "red"
    })
    row.appendChild(square);
    i++;
}
container.appendChild(row);
}

// CALL function for 16 single rows of 16 square div elements
row01 = createRow(16);
row02 = createRow(16);
row03 = createRow(16);
row04 = createRow(16);
row05 = createRow(16);
row06 = createRow(16);
row07 = createRow(16);
row08 = createRow(16);
row09 = createRow(16);
row10 = createRow(16);
row11 = createRow(16);
row12 = createRow(16);
row13 = createRow(16);
row14 = createRow(16);
row15 = createRow(16);
row16 = createRow(16);

// EMPTY container & PROMPT user to enter number for new grid
const btn = document.querySelector(".reset")
btn.addEventListener("click", () => {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    };
    let num = prompt("Enter a number between 1 and 100", "16");
    for (let i = 0; i < num; i++) {
        createRow(num);
    }
})