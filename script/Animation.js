function drawAnimation() {
    window.requestAnimationFrame(drawAnimation);
    var y = Math.sin(angle/fre*Math.PI*2)*amp;
    context.lineTo(x,y);
    context.stroke();
    angle += Math.PI/180;
    x =angle;
}