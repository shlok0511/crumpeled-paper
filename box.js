class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0,
        isStatic:true
    }
    this.bottom = Bodies.rectangle(x, y, 200, 20, options);
    this.widthB = 200;
    this.heightB = 20;
    
    World.add(world, this.bottom);
    this.left = Bodies.rectangle(x-100, y-50, 20, 100, options);
    this.widthl = 200;
    this.heightl = 20;
    
    World.add(world, this.left);
    this.right = Bodies.rectangle(x+100, y-50, 20, 100, options);
    this.widthr = 200;
    this.heightr = 20;
    
    World.add(world, this.right);
  }
  display(){
    var pos =this.bottom.position;
    var angle = this.bottom.angle;
    var posl =this.left.position;
    var anglel = this.left.angle;
    var posr =this.right.position;
    var angler = this.right.angle;
    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.widthB, this.heightB);
    translate(posl.x,posl.y);
    rotate (anglel);
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.widthl, this.heightl);
    translate(posr.x,posr.y);
    rotate (angler);
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.widthr, this.heightr);
    pop();

  }
};
