const grid = document.querySelector('.gridContainer');
const newBtn = document.getSelection('.new');
const resetBtn = document.querySelector('.reset');

// Create a function to create grid
makeGrid = () => {
    // Create grid of divs
    for (var i = 0; i < 256; i++) {
        var div = document.createElement('div');
        div.classList.add('box');
        grid.appendChild(div);
    }
};

// Create function that changes box colors
changeColor = (e) => {
    e.target.classList.replace('box', 'color');
}

// Create event listener on hover  
const box = document.querySelector('div');
box.addEventListener('mouseover', changeColor);

// Create function to update grid to user input
updateGrid = () => {
    prompt('Enter dimension size');
}

makeGrid();