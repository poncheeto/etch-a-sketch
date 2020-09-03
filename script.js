const grid = document.querySelector('.gridContainer');
const newBtn = document.getElementById('new');
const resetBtn = document.getElementById('reset');

// Create a function to create grid
makeGrid = () => {
    // Create grid of divs
    for (var i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        grid.appendChild(div);
    }
};

// Create function that changes box colors
changeColor = (e) => {
    e.target.classList.replace('box', 'color');
};

// Create event listener on hover  
const box = document.querySelector('div');
box.addEventListener('mouseover', changeColor);

// Create function to update grid to user input
updateGrid = (e) => {
    var num = prompt('Enter dimension size');
    grid.innerHTML = '';
    grid.style.setProperty('grid', `repeat(${num}, 2fr) / repeat(${num}, 2fr)`);
    for (var i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        grid.appendChild(div);
    }
};

// Event listener on newGrid button  
newBtn.addEventListener('click', updateGrid);

// Create function to reset grid
resetGrid = (e) => {
    grid.innerHTML = '';
    grid.style.setProperty('grid', 'repeat(16, 2fr) / repeat(16, 2fr)');
    makeGrid();
};

// Event listener on resetGrid button
resetBtn.addEventListener('click', resetGrid);

makeGrid();
