var wall,thickness;

var bullet , speed , weight;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);


}

function draw() {
  background(255,255,255);
  bullet.velocityX = speed;
  if( bullet.x - wall.x < wall.width/2 + bullet.width/2)
  {
       
    wall.shapeColor = "green";
       bullet.shapeColor="green";
    }
    else {
      bullet.velocityX = 0;
      bullet.shapeColor="red";
      wall.shapeColor="red";
    }
  drawSprites();
}

function hasCollided(bullet ,wall)
{     
    
    

     if(hasCollided(bullet,wall))
     {
 
       var damage = 0.5 * weight * speed * speed/( thickness * thickness);

       if(damage>10)
       {
         wall.shapeColor=color(225,0,0);
        
       }

       if(damage<100)
       {
         wall.shapeColor=color(0,255,0);

       }
    }  
}  
  
