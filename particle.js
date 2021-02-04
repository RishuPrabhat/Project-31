class Particle{
constructor(x,y,width){
var options={
isStatic:false,
restitution:0.7,
density:1.0,
friction:1.0


}
this.x=x;
this.y=y
this.r=width;
this.body=Bodies.circle(x,y,width/2,options)
this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)


}

display(){
	 var pos =this.body.position;
     
      
       push()
       rectMode(CENTER);
        translate(pos.x,pos.y)
       fill(this.color)
    
       ellipse(0, 0,this.r,this.r);
       pop()
	

}



}