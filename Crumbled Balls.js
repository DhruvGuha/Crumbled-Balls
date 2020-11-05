class Paper{
    constructor(x,y){
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' :0.5,
            'density' : 1.2
        }
        this.body =Bodies.circle(this.x, this.y, 50, 50, options)
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);    
    }
    display(){
        var Paperpos=this.body.position;

        push()
        translate(Paperpos.x, Paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}