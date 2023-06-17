const container = document.querySelector('.gridContainer');
const div = document.createElement('div');
div.classList.add('drawable');
const spawnGrid = document.querySelector('.spawnGrid');
let boxcount = 1;

function drawGrid(){
    spawnGrid.addEventListener('click', () => {
        createGrid()
        clearClones(container);
        for (let i = 0; i < boxcount**2; i++){
            container.append(div.cloneNode()); 
        }
    boxcount += 1
    })
    
}

function clearClones(parent){
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(){
    
    container.style.gridTemplateColumns = `repeat(${boxcount}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${boxcount}, 1fr)`;
    
    for (let i = 1; i <= boxcount * boxcount; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      gridItem.textContent = i;
      container.appendChild(gridItem);
    }
}


drawGrid()