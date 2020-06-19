var colour,colourI;

var positions = [];

var database;

function setup() {
  createCanvas(500,500);
  colour = createSprite(250, 250, 20, 20);
  colour.addImage(colourI);
  colour.scale = 0.3;

  database = firebase.database()
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
    for (var i  = 0 ; i < positions.length; i++){
      database.ref('Positions').set({
        Positions : positions
      })
    }
  }
}

function mouseDragged(){
  var points = {
    x : mouseX, y : mouseY
  }
  positions.push(points)
  console.log(positions);
}
