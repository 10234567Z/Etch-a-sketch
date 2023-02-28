let hoveringArea = document.getElementById("sketchPad")

function makeGrid(row, col) {
    hoveringArea.style.setProperty("--grid-row", row);
    hoveringArea.style.setProperty("--grid-col", col);

    /** Until cell is equal to area , increment it */
    for (c = 0; c < (row * col); c++) {
        let cell = document.createElement("div");
        hoveringArea.appendChild(cell).id = "gridCell";

        /** Upon hover change background by getting active ID with purple bgColor */
        cell.addEventListener('mouseover',function changeBackground(){
            this.setAttribute('id','active')
        })
    }
}
function gridSize(){
    makeGrid(16,16);
    let slider = document.getElementById('gridSize');
    let sliderValue = document.getElementById('value')
    sliderValue.innerHTML = slider.value + 'x' + slider.value;
    slider.oninput = function(){
        sliderValue.innerHTML = this.value + 'x' + this.value;
        let size = slider.value;
        resetGrid();
        makeGrid(size,size);
    }
}
function resetGrid(){
    hoveringArea.remove();
    hoveringArea = document.createElement('div');
    hoveringArea.id = 'sketchPad';
    document.getElementById('sketchArea').appendChild(hoveringArea);
}

gridSize();
