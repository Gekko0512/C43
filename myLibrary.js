function spawnClouds() { 
    if (frameCount % 60 === 0) {
       var cloud = createSprite(600,random(50,600));
      //cloud.y = Math.round(random(80,120));
      cloud.addImage(cloudImg);
     // cloud.scale = 1.3;
      cloud.velocityX = -3;
      
       //assign lifetime to the variable
       cloud.lifetime = 200;
   }
}