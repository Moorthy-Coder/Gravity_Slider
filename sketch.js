// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;
var box;
var gSlider;

function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;

    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 10, 5);
    gSlider.position(40, 365);
    // gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 10);

    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200, 350, 400, 20);
    box1 = new Box(200,200,25,25);
}

function mouseClicked() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        box = new Box(mouseX, mouseY, Math.round(random(5, 30)), Math.round(random(5, 30)));
        boxes.push(box);
    }
}

function draw() {
    // Draw all the elements including the slider that 
    background(0);
    Engine.update(engine);
    engine.world.gravity.y = gSlider.value();

    ground.display();
    box1.display();
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    textFont("Comic Sans MS");
    textSize(18);
    text("Gravity: " + fVal, 180, 382.5);
    // Use a for loop to show all the boxes
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].display();
        console.log(i);
    }
}