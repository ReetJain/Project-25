class Dustbin {
    constructor(x, y) {
        var options = {
            isStatic : true 
        }

        this.x = x;
        this.y = y;

        this.image = loadImage("dustbin.png");
        this.body = Bodies.rectangle(x, y, 150, 150, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image,0, 0, 150, 150);
        pop();
    }
}