// const Engine = Matter.Engine;
// const Bodies = Matter.Bodies;
// const World = Matter.World;

var canvas;
var abutton;
var bbutton;
var cbutton;
var a,b,c; 
//var engine,world;
var form;

function preload() {
  abutton=loadImage("assets/a.png")
  bbutton=loadImage("assets/b.png")
  cbutton=loadImage("assets/c.png")
  

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
 form =new Form ()
form.display();
 // engine=Engine.create()
 // world = engine.world;

  //a  =new boxClass(100,100,50,50)
  // a  =createSprite(100,100,50,50)
  // a.addImage("a",abutton)
  // a.scale=0.6;
  // b=createSprite(200,100,100,100)
  // b.addImage("b",bbutton)
  // b.scale=0.6;
  // c=createSprite(300,100,100,100)
  // c.addImage("c",cbutton)
  // c.scale=0.6;





  


 



}

function draw() {
  background("blue");
//Engine.update(engine); 


drawSprites()





  }

 
  


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
