window.onload = function () {
    canvas = document.getElementById('AnimateCanvas')
    context = canvas.getContext('2d');
    pi = Math.PI;
    amp = 100;
    fre = 200;
    num = 5;
    dunum = 10;
    currentPoint ={x:0,y:0};

    context.translate(0,canvas.height/2);
    context.moveTo(0,0);
    context.lineTo(canvas.width,0);
    context.stroke();
    for(var i = 0; i<dunum; i++){
        if(Math.random() > 0.5){
            move("up",Math.random()*100,Math.random()*200);
        }else {
            move("down",Math.random()*100,Math.random()*200);
        }

    }
    context.stroke();
    // move("down",Math.random()*100,Math.random()*200);
    // context.stroke();
    // drawAnimation();
}
function move(model,amp,fre) {
    context.moveTo(currentPoint.x,currentPoint.y);
    var x = currentPoint.x;
    var y;
    if(model == "up"){
        for(var angle = fre*1/4;angle<fre*3/4;angle+=pi/180){
            y = Math.sin(angle/fre*pi*2)*amp;
            if(Math.sin(angle/fre*pi*2)*amp > currentPoint.y){
                y = Math.sin(angle/fre*pi*2)*amp - (Math.sin(angle/fre*pi*2)*amp - currentPoint.y);
            }else{
                y = Math.sin(angle/fre*pi*2)*amp + (currentPoint.y - Math.sin(angle/fre*pi*2)*amp);
            }
            context.lineTo(x,y);
            x =angle-fre*1/4+currentPoint.x;
        }
    }else if(model == "down"){
        for(var angle = fre*3/4;angle<fre*5/4;angle+=pi/180){
            y = Math.sin(angle/fre*pi*2)*amp;
            if(Math.sin(angle/fre*pi*2)*amp > currentPoint.y){
                y = Math.sin(angle/fre*pi*2)*amp + (Math.sin(angle/fre*pi*2)*amp - currentPoint.y);
            }else{
                y = Math.sin(angle/fre*pi*2)*amp - (Math.sin(angle/fre*pi*2)*amp - currentPoint.y);
            }
            context.lineTo(x,y);
            x =angle-fre*3/4+currentPoint.x;
        }
    }

    currentPoint.x = x;
    currentPoint.y = y;
}