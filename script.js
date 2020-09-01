// Create a function to create grid
makeGrid = () => {
    // Create divs of rows
    for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('#container').appendChild(row);
        // Create divs of boxes within rows
        for (var j = 0; j < 16; j++) {
            var box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
        }
    }
}

// Create function that changes box colors
changeColor = (e) => {
    e.target.classList.replace('box', 'color');
}

// Create event listener on hover 
const box = document.querySelector('#container');
console.dir(box.firstElementChild);
//box.addEventListener('mouseover', changeColor);
//console.log(e)
