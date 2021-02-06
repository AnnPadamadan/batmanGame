const Engine = Matter.Engine;
 const World = Matter.World;
 //const Events = Matter.Events;
const  Bodies = Matter.Bodies;

var person;
var maxDrops = 100
var drop;
var droplets = [];
var batman;
var lightning;
var light, light1, light2, light3;

var one;
function preload(){
    light = loadAnimation("1.png", "2.png", "3.png", "4.png");
   
    one = loadAnimation("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png", "walking_6.png", "walking_7.png", "walking_8.png", );

}

function setup(){
  createCanvas(400, 800);

  engine = Engine.create();
  world = engine.world;
  
 lightning = createSprite(200, 10, 10, 10);
 lightning.addAnimation("light", light);
batman = createSprite(200, 730, 10, 10);
batman.addAnimation("one", one);
batman.scale = 0.2
}

function draw(){
  Engine.update(engine);
  background("gray");
  if(frameCount%20===0){
     droplets.push(new Drops(random(0, 400), 10,10));
     
   }
 
  for (var j = 0; j < droplets.length; j++) {
   
    droplets[j].display();
 }
 //storm();

//drop.display();
//person.display();

drawSprites();
}   








 
