
var score=0;
var edges;
var b;

function preload() {
   mon1img=loadImage("mon1.png");
   mon2img=loadImage("mon2.png");
   mon3img=loadImage("mon3.png");
   mon4img=loadImage("mon4.png");
   mon5img=loadImage("mon5.png");
   bgimg=loadImage("bac1.jpg");
   bg2img=loadImage("back3.jpg");
   plimg=loadImage("b2.png");
   bimg=loadImage("b3.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);

    back1 = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    back1.addImage(bg2img);

    back1.scale=1.8;
 

pl = createSprite(windowWidth-200,windowHeight/2);
pl.addImage(plimg);
pl.scale=0.35;
/*mon2 = createSprite(200,200);
mon2.addImage(mon2img);
mon3 = createSprite(300,200);
mon3.addImage(mon3img);
mon4 = createSprite(400,200);
mon4.addImage(mon4img);
mon5 = createSprite(500,200);
mon5.addImage(mon5img);
mon5.scale=0.5;
*/


mon1gp=new Group();
mon2gp=new Group();
mon3gp=new Group();
mon4gp=new Group();
mon5gp=new Group();
bgp=new Group();
  
 
   edges= createEdgeSprites();
  
}

function draw(){
   // background(76,77,79)
   background("white")
   MON1();
   MON2();
   MON3();
   MON4();
   MON5();

   if(keyDown(UP_ARROW)){
      pl.y=pl.y-5;
   }
   if(keyDown(DOWN_ARROW)){
      pl.y=pl.y+5;
   }

   if(keyDown("space")){
      Bul();
   }
   
   if(mon1gp.isTouching(bgp)){
      mon1gp.get(0).destroy();
      bgp.get(0).destroy();
      score=score+1;

  }
  if(mon2gp.isTouching(bgp)){
   mon2gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+3;

}
if(mon3gp.isTouching(bgp)){
   mon3gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+5;

}
if(mon4gp.isTouching(bgp)){
   mon4gp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+8;

}
if(mon5gp.isTouching(bgp)){
   mon5grp.get(0).destroy();
   bgp.get(0).destroy();
   score=score+10;

}



   
   drawSprites();

   textSize(30);
    fill("pink");
    text("SCORE : "+score,windowWidth-300,50);
}

function MON1(){
  if(frameCount%160===0){
   mon1 = createSprite(100,Math.round(random(100,windowHeight-300)));
   mon1.addImage(mon1img);
   mon1.scale=0.35;
   mon1.velocityX=3;
   mon1.lifetime=(395);
   mon1gp.add(mon1);
  } 

}
function MON2(){
   if(frameCount%300===0){
    mon2 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon2.addImage(mon2img);
    mon2.scale=0.35;
    mon2.velocityX=3.5;
    mon2.lifetime=(350);
    mon2gp.add(mon2);
   } 
 }
 function MON3(){
   if(frameCount%500===0){
    mon3 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon3.addImage(mon3img);
    mon3.scale=0.35;
    mon3.velocityX=4;
    mon3.lifetime=(300);
    mon3gp.add(mon3);
   } 
 }
 function MON4(){
   if(frameCount%800===0){
    mon4 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon4.addImage(mon4img);
    mon4.scale=0.35;
    mon4.velocityX=6;
    mon4.lifetime=(200);
    mon4gp.add(mon4);
   } 
 }
 function MON5(){
   if(frameCount%1000===0){
    mon5 = createSprite(100,Math.round(random(70,windowHeight-100)));
    mon5.addImage(mon5img);
    mon5.scale=0.35;
    mon5.velocityX=8;
    mon5.lifetime=(150);
    mon5gp.add(mon5);
   } 
 }

function Bul(){
   b=createSprite(pl.x,pl.y);
   b.addImage(bimg);
   b.velocityX=-6;
   b.scale=0.18
   b.lifetime=150;
   bgp.add(b);
}