var mouse, mouseA1, mouseA2, mouseA3, cat, catA1, catA2, catA3;
var bg, bgImg;

function preload() {
    
    catA1 = loadAnimation("cat1.png");
    catA2 = loadAnimation("cat2.png", "cat3.png");
    catA3 = loadAnimation("cat4.png");

    mouseA1 = loadAnimation("mouse1.png");
    mouseA2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseA3 = loadAnimation("mouse4.png");

    bg = loadImage("garden.png");

}

function setup(){

    createCanvas(1000,800);

    garden = createSprite(width/2,height/2,width,height);
    garden.addImage(bg);
    garden.scale = 1.2;

    mouse = createSprite(100,600,10,20);
    cat = createSprite(900,590,10,20);
    
    cat.scale = 0.2;
    mouse.scale = 0.1;

    cat.setCollider("rectangle",0,0,200,200);

    cat.addAnimation("lie",catA1);
    cat.addAnimation("walk",catA2);
    cat.addAnimation("touch",catA3);

    mouse.addAnimation("stand",mouseA1);
    mouse.addAnimation("taunt",mouseA2);
    mouse.addAnimation("touch",mouseA3);

    cat.changeAnimation("lie");
    mouse.changeAnimation("stand");

}

function draw() {

    background("black");


    if(cat.isTouching(mouse)){

        cat.changeAnimation("touch");
        mouse.changeAnimation("touch");

        cat.velocityX = 0;

        keyCode = 0;
    }


    if(keyCode === LEFT_ARROW){

        cat.velocityX = -5;

        cat.changeAnimation("walk");
        mouse.changeAnimation("taunt");

    }

    drawSprites();

    textAlign(CENTER,CENTER);
    textSize(64);
    fill("black");
    text("Tom and Jerry",width/2,50);

}
