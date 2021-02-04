class Plinko{
    constructor(x,y){
        var options = {
            density:0.8,
            restitution: 0.8,
            friction:1,
            isStatic:true

        }
        this.r = 8;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);

    }
    display(){
var pos = this.body.position;
var angle = this.body.angle;

push();
translate(pos.x,pos.y);
rotate(angle);
fill("white");
ellipseMode(RADIUS);
ellipse(0,0,this.r,this.r);
pop();
    }
};