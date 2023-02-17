let mesBulles;
let n = 500; // pour placer n bulles

function setup() {
  createCanvas(800, 400);
  mesBulles = [];
  for (let i = 0; i < n; i++) {
    let xBulle = random(width);
    let yBulle = random(height);
    let maBulle = new Bulle(xBulle,yBulle)
    mesBulles.push(maBulle);
    
    
  }
}

function draw() {
  background("rgb(244,240,248)");
  for (let i = 0; i < mesBulles.length; i++) {
    let maBulle = mesBulles[i];
    maBulle.grouille();
    maBulle.affiche();
  }
}

class Bulle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 100;
    this.colorR = random(0,255);
    this.colorG = random(0,255);
    this.colorB = random(0,255);
    this.colorT = random(99);
  }

  affiche() {
    fill(this.colorR,this.colorG,this.colorB,this.colorT);
    ellipse(this.x, this.y, this.r, this.r);
    noStroke();
    if(this.x<0){this.x=0};
    if(this.x>width){this.x=width};
    if(this.y<0){this.y=0};
    if(this.y>height){this.y=height};
  }
  
  grouille(){
    this.x=this.x+random(-3,3);
    this.y=this.y+random(-3,3);
  }
}



