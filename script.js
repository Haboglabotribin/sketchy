const container = document.querySelector('.gridContainer');
const div = document.createElement('div');
div.classList.add('drawable');
const spawnGrid = document.querySelector('.spawnGrid');
let boxcount = 1;

function drawGrid(){
    spawnGrid.addEventListener('click', () => {
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


drawGrid()