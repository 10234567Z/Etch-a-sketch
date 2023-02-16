let hoveringArea = document.getElementById("sketchPad")

function makeGrid(row,col){
    hoveringArea.style.setProperty("--grid-row" , row);
    hoveringArea.style.setProperty("--grid-col" , col);

    for(c = 0; c < (row * col); c++){
        let cell = document.createElement("div");
        hoveringArea.appendChild(cell).id = "gridCell";
    }
    let cell = document.getElementById("gridCell")
    cell.addEventListener("mouseover",hoverTrail)

    function hoverTrail(){
        cell.style.background = 'blue';
    }
}

window.onload = function() {
    makeGrid(16,16);
} 