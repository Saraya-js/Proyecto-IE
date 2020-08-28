let x=101;
let y=101;
let a=150;
let b=150;
let c=250;
let d=250;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(222,143,184);
  stroke(128,64,0); 
  strokeWeight(2);
  ellipse(width/2,height/2,300,300);//Elipse de fuera
  strokeWeight(100);//Grosor de elipse dinamica
  ellipse(width/2,height/2,x,y);//Dibujar elipse dinamica
  if ( x<200) {
    x=x+0.5;
    y=y+0.5;
    c=c+0.5;
    d=d+0.5;
    a=a-0.5;
    b=b-0.5;
  } else {
    x=100;
    y=100;
    c=247;
    d=247;
    a=150;
    b=150;
  }
  strokeWeight(2);

  ellipse(width/2,height/2,100,100);
  strokeWeight(6);
  stroke(255,255,255);
  line(200,150,200,a);
  line(150,200,b,200);
  line(250,200,c,200);
  line(200,250,200,d);  
  
}