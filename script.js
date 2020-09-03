const grid = document.querySelector('.gridContainer');
const newBtn = document.getElementById('new');
const resetBtn = document.querySelector('.reset');

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
}

// Create event listener on hover  
const box = document.querySelector('div');
box.addEventListener('mouseover', changeColor);

// Create function to update grid to user input
updateGrid = (e) => {
    var num = prompt('Enter dimension size');
    grid.innerHTML = '';
    grid.style.setProperty('grid', `repeat(${num}, 2fr) / repeat(${num}, 2fr)`);
    //grid.style.setProperty('grid', `repeat(${num}, 2fr)`);
    for (var i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        grid.appendChild(div);
    }
};

// Create event listener on New Grid Button  
newBtn.addEventListener('click', updateGrid);

makeGrid();