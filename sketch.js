var bg, bgimg;




function preload(){
 bgimg = loadImage("newbg.png");
}

function setup(){
createCanvas(1200,700);
bg=createSprite(600,350);
bg.addImage(bgimg);
bg.scale = 2.15;
}


function draw(){
    background(0);

bg.velocityY = -2;

if(bg.y < 200){
bg.y = bg.height/2;
}

    drawSprites();
}