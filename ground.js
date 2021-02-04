class Ground {
       constructor(x, y, width, height) {
              var options = {
                     isStatic: true,
                     restitution: 0.7,
                     density: 1.0,
                     friction: 1.0
              }
              this.width = width;
              this.height = height;
              this.body = Bodies.rectangle(x, y, width, height, options)
              World.add(world, this.body)


       }
       display() {
              var pos = this.body.position;


              push()
              rectMode(CENTER);
              fill("green");

              rect(pos.x, pos.y, this.width, this.height);
              pop()


       }



}