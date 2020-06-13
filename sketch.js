var colour,colourI;

function setup() {
  createCanvas(500,500);
  colour = createSprite(250, 250, 20, 20);
  colour.addImage(colourI);
  colour.scale = 0.3;
}

function preload(){
  colourI = loadImage("blackdot.png");
}

function draw(){ 
  Drawing();
  drawSprites();
}

function Drawing(){
  if(mousePressedOver(colour)){
    colour.x = World.mouseX;
    colour.y = World.mouseY;
  }
}