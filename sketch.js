var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 50, 15);
  thickness = random(22,83);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.shapeColor = ("white");
  

  //car.velocityX = speed;

  speed = random(223,321);
  weight = random(30,52);
  

}

function draw() {
  background(255,255,255); 
  background("black");

  wall.shapeColor = ("rgb(80,80,80)");
  
  bullet.velocityX = speed;

  //collision();

  textFont("Times New Roman");
  textSize(35);
  stroke("white");
  text("Military Bullet Testing", 650, 50);

  if(collision1(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage > 10){
      wall.shapeColor = color("red");
    } 
    if(damage < 10){
      wall.shapeColor = color("green");
    }
  }

  drawSprites();
}

function collision1(){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}