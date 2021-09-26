var bg, mario,koopa1,goomba1,tunnel1,brick1,log1,stair1;
var stairsG,logsG,tunnelsG,bricksG,goombasG,koopasG;
var barrierLeft, barrierRight, marioLeft, marioRight, marioLeftStand, marioRightStand;

function preload(){
  bg=loadImage("images/background.gif")
  marioLeft= loadAnimation("images/marioLeft2.png", "images/marioLeft3.png");
  marioRight= loadAnimation("images/marioRight2.png", "images/marioRight3.png");
  marioLeftStand = loadImage("images/marioLeft1.png");
  marioRightStand = loadImage("images/marioRight1.png");
}


function setup() {
  createCanvas(1440,821);
  mario = new Mario();

  barrierLeft = createSprite(110,450,50,600);
  barrierRight=createSprite(11900,450,50,600);
  ground = createSprite(1950, 748, 3925, 30);
  ground2 = createSprite(4455, 748, 850, 30);
  ground3 = createSprite(6864, 748, 3638, 30);
  ground4 = createSprite(10445, 748, 3300, 30);
  //ground.visible = false;
  ground2.visible = false;
  ground3.visible = false;
  ground4.visible = false;
  barrierLeft.visible = false;
  barrierRight.visible = false;

  
  //GROUPS 
  stairsG = new Group();
  logsG = new Group();
  tunnelsG = new Group();
  bricksG = new Group();
  goombasG = new Group();
  koopasG = new Group();


  //ENEMIES
  createKoopas();
  createGoombas();


  //OBSTACLES
  createStairs();
  createLogs();
  createTunnels();
  createBricks();

}

function draw() {
  background(0);  
  image(bg,0,0,12000,821);
  mario.move();

 



  moveKoopas();
  moveGoombas();
  

  drawSprites();
}