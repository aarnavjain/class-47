class Mario{
    constructor(){
        this.body = createSprite(200, 400, 50, 50)
        this.body.shapeColor = "red"
        this.body.addAnimation("left",marioLeft)
        this.body.addAnimation("leftStand",marioLeftStand)
        this.body.addAnimation("right",marioRight)
        this.body.addAnimation("rightStand",marioRightStand)
        this.body.scale = 1.5;
        this.body.debug=true
        this.body.setCollider("rectangle",5,0,30,60);
        this.jump=false

    }
    move(){
        
        console.log("X: " + this.body.x);
        console.log("Y: "+ this.body.y);

        this.body.velocityY = this.body.velocityY + 1;

        //COLLISION WITH OBJECTS
        this.body.collide(ground);
        this.body.collide(ground2);
        this.body.collide(ground3);
        this.body.collide(ground4);

        this.body.collide(barrierLeft);
        this.body.collide(barrierRight);
      
        this.body.collide(bricksG);
        this.body.collide(logsG);
        this.body.collide(stairsG);
        this.body.collide(tunnelsG);
        this.body.collide(goombasG);
        this.body.collide(koopasG);
      
        if (this.body.x<10800 && this.body.x>219)
            camera.position.x=this.body.x+500
        
        //MOVEMENT 
        this.jump=false;
        //console.log(this.touch(this.body,bricksG))
        if(keyDown(UP_ARROW)){
            //Jumping on the ground
            if(this.touch(this.body,ground) || this.touch(this.body,ground2) || this.touch(this.body,ground3) || this.touch(this.body,ground4)){
                this.jump=true
            }

            //Jumping on bricks
            for (var i=0;i<bricksG.length;i++){
                if (this.touch(this.body,bricksG.get(i))){
                    this.jump=true
                }
            }

            //Jumping on stairs
            for (var i=0;i<stairsG.length;i++){
                if (this.touch(this.body,stairsG.get(i))){
                    this.jump=true
                }
            }

            //Jumping on logs
            for (var i=0;i<logsG.length;i++){
                if (this.touch(this.body,logsG.get(i))){
                    this.jump=true
                }
            }

            //Jumping on tunnels
            for (var i=0;i<tunnelsG.length;i++){
                if (this.touch(this.body,tunnelsG.get(i))){
                    this.jump=true
                }
            }
            
            //Jumping on goombas
            for (var i=0;i<goombasG.length;i++){
                if (this.touch(this.body,goombasG.get(i))){
                    this.jump=true
                }
            }

            //Jumping on koopas
            for (var i=0;i<koopasG.length;i++){
                if (this.touch(this.body,koopasG.get(i))){
                    this.jump=true
                }
            }
        }

        if (this.jump===true){
            this.body.velocityY= -40
        }
        if(keyDown(LEFT_ARROW)){
            this.body.x=this.body.x-10
            this.body.changeAnimation("left")
        }
        if(keyDown(RIGHT_ARROW)){
            this.body.x=this.body.x+10
            this.body.changeAnimation("right")
        }
    }  
      
    touch(ob1, ob2){
        if(ob1.x - ob2.x <= ob2.width/2 + ob1.width/2
            && ob2.x - ob1.x <= ob2.width/2 + ob1.width/2
            && ob2.y -  ob1.y <= ob2.height/2 + ob1.height/2
            && ob1.y - ob2.y <= ob2.height/2 + ob1.height/2)
            {
            
            return true;
          }
          else{
            return false;
          }
    }
}
