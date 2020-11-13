// Simetría correspondiente al número de reflejos.
// Cambia el valor para obtener un número diferente de reflexiones
let symmetry = 9;

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton, amarilloButton, rojoButton, azulButton, circulosButton; 
let slider;
let sliderR,butSliderR;
let sliderG,butSliderG;
let sliderB,butSliderB;
let circulo=false;

function setup() {
  createCanvas(900, 900);
  angleMode(DEGREES);
  background(0);

  // Creando el botón para guardar para el archivo
  saveButton = createButton('save');
  saveButton.mousePressed(saveFile);

  // Creando el botón para borrar la pantalla
  clearButton = createButton('clear');
  clearButton.mousePressed(clearScreen);

  // Creando el botón para la pantalla completa
  fullscreenButton = createButton('Full Screen');
  fullscreenButton.mousePressed(screenFull);
  
   //Configurando boton circulos
  circulosButton = createButton("Circulos");
  circulosButton.mousePressed(setCirculos);
  
  circulosButton = createButton("resetCirculos");
  circulosButton.mousePressed(resetCirculos);
  
  // Configurando el deslizador para el grosor del pincel
  brushSizeSlider = createButton('Brush Size Slider');
  sizeSlider = createSlider(1, 32, 4, 0.1);
  
  // Escala de color en R
  butSliderR = createButton('R');
  sliderR = createSlider(0,255,100,1);
  
  // Escala de color en G
  butSliderG = createButton('G');
  sliderG = createSlider(0,255,100,1);

  // Escala de color en B
  butSliderB = createButton('B');
  sliderB = createSlider(0,255,100,1);
}

// Función para guardar el archivo
function saveFile() {
  save('design.jpg');
}

// Función para limpiar la pantalla
function clearScreen() {
  background(0);
}

// Función para pantalla completa
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);

}

function doCirculos(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}

function setCirculos(){
  circulo=true;
}

function resetCirculos(){
  circulo=false;
}

function draw() {
   
  // Llame al método circulos() y envíele los parámetros
  // para la posición actual del mouse y la posición anterior del mouse
   //setCirculos(mouseX, mouseY, pmouseX, pmouseY);

  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sizeSlider.value();
        let r = sliderR.value();
        let g = sliderG.value();
        let b = sliderB.value();
        strokeWeight(sw);
        stroke(r,g,b);
        if(circulo){
          push();
          fill(r,g,b);
          doCirculos(mx, my, pmx, pmy);
          pop();
        }
        else{
          line(mx, my, pmx, pmy);
        }
        

        
        push();
        scale(1, -1);
        if(circulo){
          push();
          noStroke();
          fill(r,g,b);
          doCirculos(mx, my, pmx, pmy);
          pop();
        }
        else{
          line(mx, my, pmx, pmy);
        }
        pop();
      }
    }
  }
}
