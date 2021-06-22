var n1,n2;
var b1,b2;
var v1,v2




function setup() {
  createCanvas(400, 400);
n1 = createInput().attribute("placeholder","Enter the First Number")
n1.position(5,60)
n2 = createInput().attribute("placeholder","Enter the Second Number")
n2.position(200,60)
b1 = createButton("add")
b1.position(10,200)
b1.mousePressed(add)
}


function draw() {
  background(10);
  v1 = parseInt(n1.value())
  v2 = parseInt(n2.value())
}

function add() { 
console.log(v1+v2)
}