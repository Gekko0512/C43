var mario,platforms;
var gameState;
var gameState1,gameState2,gameState3;
var cloudsGroup;
var cloudImg;
var random;
var backgroundImg;


//var hrAng1,mnAng2,scAng3;
function preload(){
  cloudImg = loadImage("bgClouds1.PNG");
  backgroundImg  = loadImage("background.PNG");
} 

function setup() {
  createCanvas(displayWidth,displayHeight);
  //createSprite(400, 200, 50, 50);
  //random = randomNumber(80,120);
  

}

function draw() {
  background(backgroundImg);  

 spawnClouds();

 drawSprites();
 
}
