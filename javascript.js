let hoveringArea = document.getElementById("sketchPad")

function makeGrid(row, col) {
    hoveringArea.style.setProperty("--grid-row", row);
    hoveringArea.style.setProperty("--grid-col", col);

    for (c = 0; c < (row * col); c++) {
        let cell = document.createElement("div");
        hoveringArea.appendChild(cell).id = "gridCell";
        cell.addEventListener('mouseover',function changeBackground(){
            this.classList.add('active');
        })
    }
}
makeGrid(16, 16);
