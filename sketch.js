// mkaing variables for the speed and the weght
var weight, speed, deformation;
// creating the sprite
var bullet, wall;
let thickness;

function setup() {
  createCanvas(1600, 400);
  weight = random(30, 50);
  speed = random(220, 320);
  thickness = floor(random(22, 83));
  deformation =
    ((0.5 * weight * speed * speed) / thickness) *
    thickness *
    thickness *
    thickness;

  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = rgb(80);

  bullet = createSprite(0, 200, 30, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
}

function draw() {
  background("black");
  console.log(deformation);
  textSize(40);
  textStyle(BOLD);
  fill("Green");
  text("Military Bullet Test", width / 3, 50);

  if (isTouching(bullet, wall)) {
    bullet.velocityX = 0;
    if (deformation > 10) {
      textSize(64);
      fill("red");
      text("LETHAL !", width / 3, 200);
      wall.destroy();
    }
    if (deformation < 10) {
      textSize(44);
      fill("green");
      text("GOOD TO GO !", width / 3, 200);
      bullet.shapeColor = "green";
    } else {
      wall.shapeColor = "blue";
      bullet.velocityX = 0;
    }
  }
  drawSprites();
}
