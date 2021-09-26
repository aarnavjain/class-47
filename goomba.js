class Goomba{
    constructor(x, y){
        this.body=createSprite(x,y,40,40);
        this.body.shapeColor = "brown";
        goombasG.add(this.body);
    }
    move(){
        this.body.velocityY = this.body.velocityY + 1;
        this.body.collide(ground);
    }
}

function createGoombas(){
    goomba1 = new Goomba(1200,600);
    goomba2 = new Goomba(2000,600);
    goomba3 = new Goomba(2500,600);
    goomba4 = new Goomba(3000,600);
    goomba5 = new Goomba(5000,600);
    goomba6 = new Goomba(5200,600);
    //goomba7 = new Goomba(3000,600);
    //goomba8 = new Goomba(3500,600);
 }

 function moveGoombas(){
    goomba1.move();
    goomba2.move();
    goomba3.move();
    goomba4.move();
    goomba5.move();
    goomba6.move();

 }

