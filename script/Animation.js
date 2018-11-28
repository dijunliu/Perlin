function drawAnimation() {
    window.requestAnimationFrame(drawAnimation);
    context2.clearRect(0,0,canvas2.width,canvas2.height);

    var dx = Perlindata[1000+PLtime+1].y - Perlindata[1000+PLtime].y;
    var dy = Perlindata[2000+PLtime+1].y - Perlindata[2000+PLtime].y;
    rect.x += dx*10;
    rect.y += dy*10;
    rect.draw(context2);
    PLtime +=10;
}