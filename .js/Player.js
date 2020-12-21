class Player{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200,displayHeight/2+20,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image1 = loadImage("lead.png");
        this.image2 = loadImage("leadMask.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image1, this.body.position.x, this.body.position.y, this.body.width, this.body.height);
    }

}