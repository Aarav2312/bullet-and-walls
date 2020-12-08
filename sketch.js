 var bullet, wall;
  var speed,weight;

function setup() {
  
  createCanvas(1200,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  bullet.velocityX=speed;
 wall=createSprite(1000,200,60,height/2);
 wall.shapeColor=color(80,80,80);
bullet.shapeColor="white"
}

function draw() {
  background(0,0,0);  
  if (wall.x-car.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      bullet.shapeColor="red"
    }
    if(deformation<180&&deformation>100){
      bullet.shapeColor="yellow"
    }
    if(deformation>100){
      bullet.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}