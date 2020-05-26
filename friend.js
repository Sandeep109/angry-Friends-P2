class friend extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/friend.png");
    this.Visiblity = 255;
    var rand = Math.round(random(1,3));
    switch(rand) {

        case 1: this.image = loadImage("sprites/e1.png")
                      break;
  
        case 2: this.image = loadImage("sprites/e2.png")
                      break;
  
        case 3: this.image = loadImage("sprites/e3.png")
                      break;
  
       
  
        
        default: break;
   }
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
score(){
  if(this.Visiblity < 0 && this.Visiblity > -1005 ){
    score++;

  }
}


};