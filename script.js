// Create a function to create grid
function makeGrid() {
    // Create divs of rows
    for (var i = 0; i < 16; i++) {
        var row = document.createElement('div');
        row.classList.add('row');
        document.querySelector('#container').appendChild(row);
        // Create divs of boxes within rows
        for (var j = 0; j < 16; j++) {
            var box = document.createElement('div');
            box.classList.add('box');
            //box.addEventListener('mouseover', changeColor);
            row.appendChild(box);
        }
    }
}

// Create function that changes box colors
function changeColor(e) {
    document.querySelector('.box').style.backgroundColor = 'black';
}

// Create event listener on hover 
const boxes = document.querySelectorAll('.box');
    boxes.forEach(box)
    boxes.addEventListener('click', changeColor);
    console.log(e);