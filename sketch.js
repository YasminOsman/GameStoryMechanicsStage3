const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var player;
var engine, world;
var form;
var char1, char2, char3, char4;

function preload(){
  char1 = loadImage("StuChar1.png");
  char2 = loadImage("StuChar2.png");
  char3 = loadImage("StuChar3.png");
  char4 = loadImage("StuChar4.png");
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(displayWidth-20, displayHeight-30);
  player = new Player();
  form = new Form();
}

function draw() {
  Engine.update(engine);
  background(255);  
  player.display();
  form.display();
  spawnCharacters();
}

function spawnCharacters(){
  if(frameCount%120===0){
      var char = createSprite(displayWidth, displayHeight/2+20, 50, 50);
      char.velocityX = -4;
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1 : char.addImage(char1);
        break;
        case 2 : char.addImage(char2);
        break;
        case 3 : char.addImage(char3);
        break;
        case 4 : char.addImage(char4);
        break;
        default : break;
      }
      char.scale = 0.5;
  }
}