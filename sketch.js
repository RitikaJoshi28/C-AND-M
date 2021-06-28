var jerry,jerryImg1,jerryImg2;
var tom,tomImg1,tomImg2;
var bgImg;
function preload() {
    //load the images here
    tomImg1=loadImage("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    jerryImg1=loadImage("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    
   
    
   
    bgImg=loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry=createSprite(150,650,20,20);
    jerry.addImage("jerry1",jerryImg1);
    
    jerry.addAnimation("jerry2",jerryImg2);
    jerry.scale=0.2;
    
    tom=createSprite(590,650,20,20);
    tom.addImage("tom1",tomImg1);
    
   
    
   
    tom.addAnimation("tom2",tomImg2);
   tom.scale=0.2;
   

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2)
    {
        tom.addAnimation("t",tomImg2);
        tom.changeAnimation("t");
        jerry.addAnimation("j2",jerryImg2);
        jerry.changeAnimation("j2");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW))
{
    jerry.addAnimation("j",jerryImg2);
    jerry.changeAnimation("j");
    jerry.velocityX=2;
}
if(keyDown(LEFT_ARROW))
{
    tom.addAnimation("t1",tomImg2);
    tom.changeAnimation("t1");
    tom.velocityX=-2;
}


}
