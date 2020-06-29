var wall,thickness;
var speed,bullet,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
wall = createSprite(1200,200,thickness,height/2);
bullet = createSprite(330,200,30,25);
weight =random(30,52);
speed =random(223,321);
bullet.velocityX = speed/20;
damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);
}
function draw() {
  background(0,2,1);  
  
  if (bullet.x > 1170 && damage < 10){
    bullet.velocityX = 0;
    bullet.shapeColor = color(0,225,0);
    text ("safe", 400,200);
    }
    if (bullet.x > 1170 && damage > 10){
     // bullet.velocityX = 1;
      bullet.shapeColor = color(225,0,0);
      if (bullet.x > 1170 && damage < 10){
        bullet.velocityX = 0;
        bullet.shapeColor = color(0,225,0);
        text ("not safe", 400,200);
        }
      }
  drawSprites();
}