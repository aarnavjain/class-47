class Log{
    constructor(x, y){
        this.body=createSprite(x,y,165,55);
        this.body.shapeColor = "pink";
        this.body.visible = false;
        logsG.add(this.body);
    }
}
function createLogs(){
  log1 = new Log(4620,293);
  log2 = new Log(4785,293);
  log3 = new Log(5246,293);
  log4 = new Log(6950,293);
}