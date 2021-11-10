var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

var inp = prompt("Введите координаты начальной и конечной точки (4 числа через пробел)");
var input = inp.split(' ')
line(parseInt(input[0]),parseInt(input[1]),parseInt(input[2]),parseInt(input[3]))

function line(x0, y0, x1, y1) {
    var dx = Math.abs(x1 - x0);
    var dy = Math.abs(y1 - y0);
    var sx = (x0 < x1) ? 1 : -1;
    var sy = (y0 < y1) ? 1 : -1;
    var err = dx - dy;

    while(true) {
        ctx.fillRect(x0,y0,1,1)
        if ((x0 === x1) && (y0 === y1))
            break;

        let e2 = 2 * err;

        if (e2 > -dy) {
            err -= dy;
            x0  += sx;
        }
        if (e2 < dx) {
            err += dx;
            y0  += sy;
        }
    }
}