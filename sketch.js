var bullet,deformater,wall,speed,weight,thickness,Damage;


function setup() {
  
  createCanvas(1600,400);
   

  bullet = createSprite(100,200,20,20);
  bullet.shapeColor = "white";
   thickness = 22;
   speed = random(223,321);
   bullet.velocityX = speed;
   weight = random(30,52);

  wall = createSprite(1200,200,thickness, height/2);
  
 
}


function draw() {
 
   
  if(bullet.collide(wall)){
    
    Damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    
    if(Damage>10){
      wall.shapeColor = "red";
    }
    if(Damage<10){
      wall.shapeColor = "green";
    }
    
    
   console.log(Damage);
  }
 
  background("black");  
  drawSprites();
}
