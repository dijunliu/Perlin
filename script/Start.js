window.onload = function () {
    canvas = document.getElementById('AnimateCanvas')
    context = canvas.getContext('2d');
    pi = Math.PI;
    amp = 100; //振幅
    fre = 200; //波长
    num = 5;
    dunum = 30;
    currentPoint ={x:0,y:0};

    context.translate(0,canvas.height/2);
    context.moveTo(0,0);
    context.lineTo(canvas.width,0);
    context.stroke();
    xy = [];
    for(var i = 0; i<dunum; i++){
        var amp = Math.random()*20+5;
        var state;
        if((Math.abs(currentPoint.y)+amp > canvas.height/2 - 100)){
            if(currentPoint.y > 0 ){
                state = "up";
            }else{
                state = "down";
            }
        }else{
            state = "random";
        }
        switch (state) {
            case "up":
                move("up",amp,Math.random()*50+5);
                break;
            case  "down":
                move("down",amp,Math.random()*50+5);
                break;
            case  "random":
                if(Math.random() > 0.5){
                    move("up",amp,Math.random()*50+5);
                }else {
                    move("down",amp,Math.random()*50+5);
                }
                break;
        }

    }
    context.stroke();
}
function move(model,amp,fre) {
    context.moveTo(currentPoint.x,currentPoint.y);
    var x = currentPoint.x;
    var y;
    var dy;
    if(model == "up"){
        if(Math.sin(pi/2)*amp > currentPoint.y){
            dy = -(Math.sin(pi/2)*amp - currentPoint.y);
        }else{
            dy = currentPoint.y - Math.sin(pi/2)*amp;
        }

        for(var angle = fre*1/4;angle<fre*3/4;angle+=pi/180){
            y = Math.sin(angle/fre*pi*2)*amp + dy;
            context.lineTo(x,y);
            x =angle-fre*1/4+currentPoint.x;
            xy.push({x,y});
        }
    }else if(model == "down"){

        if(Math.sin(pi*3/2)*amp > currentPoint.y){
            dy = -(Math.sin(pi*3/2)*amp - currentPoint.y);
        }else{
            dy = currentPoint.y - Math.sin(pi*3/2)*amp;
        }

        for(var angle = fre*3/4;angle<fre*5/4;angle+=pi/180){
            y = Math.sin(angle/fre*pi*2)*amp + dy;
            context.lineTo(x,y);
            x =angle-fre*3/4+currentPoint.x;
            xy.push({x,y});
        }
    }

    currentPoint.x = x;
    currentPoint.y = y;
}