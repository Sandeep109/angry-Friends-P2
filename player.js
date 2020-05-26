class Player extends BaseClass {
  constructor(x,y){
    super(x,y,58,80);
    

    this.image = loadImage("sprites/p1.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(keyCode === 49  ){  
      this.image = loadImage("sprites/p1.png");

  }
  else if(keyCode === 50){
    this.image = loadImage("sprites/p2.png");
  }
  else if(keyCode === 51){
      
    this.image = loadImage("sprites/p3.png");
  }
  else if(keyCode === 52){
    this.image = loadImage("sprites/p4.png");

  }
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
