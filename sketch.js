const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, paper, ground;

function setup() {
    createCanvas(windowWidth, windowHeight-5);

    engine = Engine.create();
    world = engine.world;

    paper = new Paper(100, 400, 50);
    ground = new Ground(100, 600, width+width, 25);
    dustbin = new Dustbin(1100, 510);

    Engine.run(engine);
}

function draw() {
    background(51);

    dustbin.display();
    ground.display();
    if(paper.body) {
        paper.display();
    }

    if(paper.body.position.x >= 1100) {
        paper.body = null;
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-145});
    }
}    