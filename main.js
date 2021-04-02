mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMousemove);

function myMousemove(e) {
    current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_Y = e.clientY - canvas.offsetTop;
    
    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent = "mouseLeave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}