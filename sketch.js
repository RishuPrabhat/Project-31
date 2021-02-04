const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies  

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


 
function preload(){


}

function setup() {
  createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;
 ground = new Ground(width/2, height, width, 20)
 
 for (var k = 0; k <=width; k = k + 80){
   divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight))
 }
 console.log(width)

 for (var j = 75; j <=width; j=j+50){
   plinkos.push(new Plinko(j,100))}

   for (var j = 50; j <=width-10 ; j=j+50){
    plinkos.push(new Plinko(j,150))
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,200))
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,250))
  }
  
 
}

function draw() {
  


  background("pink");
 
  Engine.update(engine);
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
    ;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  }
  ground.display();
  
}