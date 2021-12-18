let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

INSIDE = 0 //0000
LEFT = 1 //0001
RIGHT = 2 //0010
BOTTOM = 4 //0100
TOP = 8 //1000

const x_max = 350;
const y_max = 350;
const x_min = 50;
const y_min = 50;

ctx.strokeRect(x_min,y_min,300,300)
ctx.strokeStyle = 'black'
ctx.stroke()

function computeCode(x,y){
    let code = INSIDE
    if (x < x_min){  // to the left of rectangle
    code |= LEFT
    }
    else if (x > x_max) // to the right of rectangle
    {code |= RIGHT}
    if (y < y_min)  //below the rectangle
    {code |= BOTTOM}
    else if (y > y_max)  // above the rectangle
    {code |= TOP}
    return code
}

let inp = prompt("Введите координаты начальной и конечной точки (4 числа через пробел)");
let input = inp.split(' ');

function hitung() {
    let x1 = parseInt(input[0])
    let y1 = parseInt(input[1])
    let x2 = parseInt(input[2])
    let y2 = parseInt(input[3])

    drawLine(new Point(x1,y1),new Point(x2,y2),'red');

    let code1 = computeCode(x1, y1)
    let code2 = computeCode(x2, y2)
    let accept = false

    let code_out;
    let x;
    let y;
    while (true) {
        if (code1 === 0 && code2 === 0) {
            accept = true
            break
        } else if ((code1 & code2) !== 0) {
            break
        } else {
            x = 1.0
            y = 1.0
            if (code1 !== 0) {
                code_out = code1
            } else {
            code_out = code2
            }
            if (code_out & TOP) {
                x = x1 + ((x2 - x1) / (y2 - y1)) * (y_max - y1)
                y = y_max
            } else if (code_out & BOTTOM) {
                x = x1 + ((x2 - x1) / (y2 - y1)) * (y_min - y1)
                y = y_min
            } else if (code_out & RIGHT) {
                y = y1 + ((y2 - y1) / (x2 - x1)) * (x_max - x1)
                x = x_max
            } else if (code_out & LEFT) {
                y = y1 + ((y2 - y1) / (x2 - x1)) * (x_min - x1)
                x = x_min
            }
            if (code_out === code1) {
                x1 = x
                y1 = y
                code1 = computeCode(x1, y1)
            } else {
                x2 = x
                y2 = y
                code2 = computeCode(x2, y2)
            }
        }
    }
    if (accept) {
        drawLine(new Point(x1,y1),new Point(x2,y2),'blue');
    }
}

var Point = function(x,y){
    this.x = x;
    this.y = y;
}

function drawLine(stPoint, endPoint,color){
    ctx.beginPath();
    ctx.moveTo(stPoint.x,stPoint.y);
    ctx.lineTo(endPoint.x,endPoint.y);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

hitung();
