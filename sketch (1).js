let bolas=[];
let cantX,cantY;
let contador=0;
let margenX=40;
let margenY=150;
let largoX,largoY;
let separadorX;
let separadorY;
let tamañoCuadrado=40;
let contadorPerdido=0;

function setup() {
  createCanvas(400, 400);
  // noLoop();
  // bol = new bola(0,0,50);
  cantX=3;
  cantY=5;
  largoX=width-2*margenX;
  largoY=height-margenX-margenY;
  separadorX=largoX/(cantX-1);
  separadorY=largoY/(cantY-1);
  for(var i=margenX;i<=(margenX+largoX);i=separadorX+i){
    for(var j=margenX;j<=(margenX+largoY);j=j+separadorY){
      bolas[contador]= new bola(i,j,tamañoCuadrado);//para guardar en el arreglo
      contador++;
    }
  }
  
  
}

function draw() {
  background(220);
  for(var i=0;i<contador;i++){
    bolas[i].update();
    bolas[i].display();
    if (mouseIsPressed) {
      bolas[i].toco(mouseX, mouseY);
    }
    bolas[i].perdido();
    
  }
  print(contadorPerdido);
}

class bola {
  constructor(posx,posy,tamaño){
    this.x=posx;
    this.y=posy;
    this.tam=tamaño;
    this.velocidad=0.5;
    this.existe=true;
  }
  display(){
    if(this.existe){
      push();
      translate(this.x, this.y);
      rectMode(CENTER);
      square(0,0,this.tam);
      pop();
    }
  }
  update(){
    this.y=this.y+this.velocidad;
  }
  toco(posx,posy){
    if ((this.x + this.tam/2) > posx && (posx > (this.x-this.tam/2)) && (posy > (this.y-this.tam/2)) && (posy < this.y + this.tam/2)) {
      this.existe=false;
    }
    
  }
  perdido(){
    if(this.y>height&&this.existe){
      contadorPerdido++;
      this.existe=false;
    }
  }
}