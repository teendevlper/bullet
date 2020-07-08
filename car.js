class Car{
    constructor(weight,speed)
    {
        this.x = 50;
        this.y = 50;
        this.sprite = createSprite(this.x,this.y,20,20);
        this.weight = random(400,1500);
        this.speed = random(30,95);
        this.sprite.velocityX = this.speed;
        this.sprite.shapeColor = color (255,255,255);
    }

}