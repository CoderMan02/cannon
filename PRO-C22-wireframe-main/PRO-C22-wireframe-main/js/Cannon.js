class Cannon {
    constructor(x,y,w,h,a) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.a = angle;
        this.cannon_Img = loadImage("./assets/cannon.png");
        this.cannon_base = loadImage("./assets/cannonBase.png");

        
    }

display() {
    push();
    imageMode(CENTER);
    image(this.cannon_Img,this.x,this.y,this.w,this.h);
    pop();
    image(this.cannon_base,70,20,200,200);
    noFill();
    }
}