const canvas = document.getElementById('drawingBoard');
const ctx = canvas.getContext('2d');
const toolbar = document.getElementById('toolbar');

const canvasleft = canvas.offsetLeft;
const canvastop = canvas.offsetTop;

canvas.width = window.innerWidth - canvasleft;
canvas.height = window.innerHeight - canvastop;

let isDrawing = false;
let lineWidth = sizePicker.value;
let startx, starty;

toolbar.addEventListener('click', (e) => {
    if(e.target.id === "clearButton"){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
})

toolbar.addEventListener('change', (e) => {
    if(e.target.id === 'sizePicker'){
        lineWidth = e.target.value;
    }
    if(e.target.id === 'colorPicker'){
        ctx.strokeStyle = e.target.value;
    }   
})

const draw = (e) => {
    if(!isDrawing) return;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasleft, e.clientY - canvastop);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startx = e.clientX - canvasleft;
    starty = e.clientY - canvastop;
})

canvas.addEventListener('mouseup', (e) => {
    isDrawing = false;
    ctx.stroke();
    ctx.beginPath();
})  

canvas.addEventListener('mousemove', draw);  
