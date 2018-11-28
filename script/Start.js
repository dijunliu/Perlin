window.onload = function () {
    canvas = document.getElementById('AnimateCanvas');
    context = canvas.getContext('2d');

    canvas2 = document.getElementById('AnimateCanvas2');
    context2 = canvas2.getContext('2d');
    //初始化rect对象
    rect = new Rect(canvas2.width/2,canvas2.height/2,2,2);
    PLtime = 0;

    pi = Math.PI;
    ampmax = 10; //振幅
    fremax = 1; //波长
    num = 5;
    dunum = 100;
    currentPoint ={x:0,y:0};

    context.translate(0,canvas.height/2);
    context.lineWidth = 1;
    context.moveTo(0,0);
    context.lineTo(canvas.width,0);
    context.stroke();
    Perlindata = [];
    for(var i = 0; i<dunum; i++){
        //随机振幅
        var amp = Math.random()*ampmax+5;
        var state;
        //越上、下线判断
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
                move("up",amp,Math.random()*fremax+5);
                break;
            case  "down":
                move("down",amp,Math.random()*fremax+5);
                break;
            //随机上下运动
            case  "random":
                if(Math.random() > 0.5){
                    move("up",amp,Math.random()*fremax+5);
                }else {
                    move("down",amp,Math.random()*fremax+5);
                }
                break;
        }

    }
    context.stroke();
    //启动动画
    drawAnimation();
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
            Perlindata.push({x,y});
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
            Perlindata.push({x,y});
        }
    }
    currentPoint.x = x;
    currentPoint.y = y;
}


