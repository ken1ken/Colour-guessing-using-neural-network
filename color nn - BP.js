r = 100;
g = 244;
b = 11;

let brain;
let which;
let i = 0;
//training

console.log('Done')

function colorPredictor(r,g,b){
  let inputs = [r / 255, g / 255, b / 255];
  let outputs = brain.predict(inputs);
  console.log(outputs);
  console.log("number of blue is: "+outputs[0]);

  let MAX = indexOfMax(outputs);


  if (MAX == 0){
    return "blue";
  }
  else if (MAX == 1) {
    return "pink";
  }
  else if (MAX == 2) {
    return "red"
  }
  else if (MAX == 3) {
    return "yellow"
  }
  else if (MAX == 4) {
    return "green"
  }
  else if (MAX == 5) {
    return "cyan"
  }
  else if (MAX == 6) {
    return "white"
  }


}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}



function pickColour() {
  r = random(255);
  g = random(255);
  b = random(255);
  redraw();
}

function setup(){
  createCanvas(700, 300);
  noLoop();
  brain = new NeuralNetwork(3,3,7)

  for (i = 0; i < 10000; i++){
    brain.train([0 / 255, 0 / 255, 255 / 255,],[1,0,0,0,0,0,0]);
    brain.train([171 / 255, 0 / 255, 255 / 255,],[1,0,0,0,0,0,0]);
    brain.train([230 / 255, 0 / 255, 255 / 255,],[0,1,0,0,0,0,0]);
    brain.train([255 / 255, 0 / 58, 255 / 255,],[0,0,1,0,0,0,0]);
    brain.train([239 / 255, 255 / 255, 0 / 255,],[0,0,0,1,0,0,0]);
    brain.train([0 / 255, 255 / 255, 9 / 255,],[0,0,0,0,1,0,0]);
    brain.train([0 / 255, 247 / 255, 255 / 255,],[0,0,0,0,0,1,0]);


  }

}

function mousePressed(){
  let targets;
  if (mouseX < 75){
    targets = [1,0,0,0,0,0,0];
  }
  else if (mouseX < 180){
    targets = [0,1,0,0,0,0,0];
  }
  else if (mouseX < 280){
    targets = [0,0,1,0,0,0,0];
  }
  else if (mouseX < 380){
    targets = [0,0,0,1,0,0,0];
  }
  else if (mouseX < 480){
    targets = [0,0,0,0,1,0,0];
  }
  else if (mouseX < 580){
    targets = [0,0,0,0,0,1,0];
  }
  else if (mouseX < 700){
    targets = [0,0,0,0,0,0,1];
  }

  let inputs = [r / 255, g / 255, b / 255];

  brain.train(inputs,targets);
  pickColour()
}

function draw(){
  background(r,g,b);
  textSize(20)
  noStroke();
  text("blue/", 10, 150);
  text("purple",10, 165)
  text("pink", 110, 150);
  text("red", 210, 150);
  text("yellow", 300, 150);
  text("green", 410, 150);
  text("cyan", 510, 150);
  text("none", 610, 150);

  let which = colorPredictor(r,g,b);
  console.log("I think it's " + which);
  if (which === "blue"){
    ellipse(25,100,10);
  }
  if (which === "pink"){
    ellipse(125,100,10);
  }
  if (which === "red"){
    ellipse(225,100,10);
  }
  if (which === "yellow"){
    ellipse(325,100,10);
  }
  if (which === "green"){
    ellipse(415,100,10);
  }
  if (which === "cyan"){
    ellipse(525,100,10);
  }
  if (which === "white"){
    ellipse(625,100,10);
  }


}
