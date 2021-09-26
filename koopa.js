class Koopa{
    constructor(x, y){
        this.body=createSprite(x,y,60,60);
        this.body.shapeColor = "white";
        koopasG.add(this.body);
    }
    move(){
        this.body.velocityY = this.body.velocityY + 1;
        this.body.collide(ground);
    }
}
function createKoopas(){
    koopa1 = new Koopa(6020,600);
    koopa2 = new Koopa(3695,600);
    koopa3 = new Koopa(8265,600);
}
function moveKoopas(){
    koopa1.move();
    koopa2.move();
    koopa3.move();
}