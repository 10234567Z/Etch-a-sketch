let hoveringArea = document.getElementById("sketchPad")
let currentColor = '#000000'
let drawingMode = singleColor;

/** On click of erase button change current color and mode*/
document.getElementById('erase').addEventListener('click', function () {
    currentColor = '#FFFFFF';
    drawingMode = eraseColor;
})

document.getElementById('reset').addEventListener('click', function () {
    let gridCell = hoveringArea.childNodes;

    /** Change background for every childelement of Hovering area to white
     * making grid reset back to white color
     */
    for(i = 0; i < gridCell.length ; i++){
        if(gridCell[i].id === 'gridCell'){
            gridCell[i].style.backgroundColor = '#FFFFFF';
        }
    }
})

/** On input in palette, change current color and mode */
document.getElementById('color').addEventListener('click', function () {

    this.oninput = function () {
        currentColor = this.value;
    }
    drawingMode = singleColor;
})

/** On click of rainbow button change mode */
document.getElementById('rainbow').addEventListener('click', function () {
    drawingMode = rainbowColor;
})


function makeGrid(row, col) {
    hoveringArea.style.setProperty("--grid-row", row);
    hoveringArea.style.setProperty("--grid-col", col);

    for (c = 0; c < (row * col); c++) {
        let cell = document.createElement('div');
        hoveringArea.appendChild(cell).id = 'gridCell';
    }

    /** Upon hover take specified color from drawing mode functions specified  */
    hoveringArea.addEventListener('mouseover', function (e) {
        if (e.target.nodeName === 'DIV') {
            drawingMode(e.target);
        }
    })
    gridArea();
}
function eraseColor(cell) {
    cell.style.backgroundColor = currentColor;
}

function singleColor(cell) {
    cell.style.backgroundColor = currentColor;
}

function rainbowColor(cell) {

    randomColor();
    cell.style.backgroundColor = currentColor;
}

function gridArea() {
    /** For changing grid area */
    let slider = document.getElementById('gridSize');
    let sliderValue = document.querySelector('.value')
    sliderValue.innerHTML = slider.value + 'x' + slider.value;
    slider.oninput = function () {
        sliderValue.innerHTML = this.value + 'x' + this.value;
        let size = slider.value;

        /** Removed grid then made a new grid with same ID for getting the same
         *  styles and methods assigned for it.
         */
        hoveringArea.remove();
        hoveringArea = document.createElement('div');
        hoveringArea.id = 'sketchPad';
        document.querySelector('.sketchArea').appendChild(hoveringArea);
        makeGrid(size, size);
    }
}

function randomColor() {
    let maxValue = 0xFFFFFF;
    let minValue = 0xff;

    /**
     * get the difference of Max and min then add +1 to not let the random reach min value then
     * -> then after getting the rand value add min value back to it so it incase don't go below min and
     * stay above min value.
     */
    let randInteger = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    let randColor = randInteger.toString(16).padStart(6, 0);
    currentColor = '#' + randColor;
}
makeGrid(16, 16);
