var fixed, moving;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor = "green";
  moving = createSprite(800, 200, 40, 90);
  moving.shapeColor = "green";
  moving.velocityX = -3;

}

function draw() {
  background(255,255,255);  

  if(abs(moving.x - fixed.x) < moving.width/2 + fixed.width/2 && abs(moving.y - fixed.y) < moving.height/2 + fixed.height/2 ){
    fixed.velocityX = moving.velocityX;
    moving.velocityX = 0;
  }
  drawSprites();

}