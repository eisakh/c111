var sea, ship
function preload(){
 
  seaImg = loadImage("sea.png");
}


function setup(){
  createCanvas(400,400);


  seaImg=createSprite(200,200)
sea.addImage(seaImg)




}

function draw() {
  backgroun("0")
  drawSprites();
}

