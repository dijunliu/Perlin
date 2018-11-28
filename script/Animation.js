function drawAnimation() {
    window.requestAnimationFrame(drawAnimation);
    // context2.clearRect(0,0,canvas2.width,canvas2.height);

    rect.x += Perlindata[1000+PLtime].y/100;
    rect.y += Perlindata[2000+PLtime].y/100;

    rect.draw(context2);
    PLtime++;
}