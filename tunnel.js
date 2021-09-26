class Tunnel{
    constructor(x, y){
        this.body=createSprite(x,y,111,115);
        this.body.shapeColor = "green";
        tunnelsG.add(this.body);

    }
   
}
function createTunnels(){
    tunnel1 = new Tunnel(1646,675);
    tunnel2 = new Tunnel(2213,675);
    tunnel3 = new Tunnel(2670,675);
    tunnel4 = new Tunnel(3294,675);
    tunnel5 = new Tunnel(9305,675);
    tunnel6 = new Tunnel(10212,675);
}