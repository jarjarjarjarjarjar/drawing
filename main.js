canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black"
width_of_line = "1"
radius = "2"
var mouseEvent="empty"
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_yof_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {mouseEvent = "mouseup"};
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){   current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0,2*Math.PI);
        ctx.stroke();
    }
}