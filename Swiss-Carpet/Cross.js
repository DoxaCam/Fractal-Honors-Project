
class Cross {
    
    constructor(pos, scale) {
        this.pos = pos
        this.scale = scale
    }

    drawShape() {
        const a = sqrtTwoMinOne * this.scale
        const b = sqrtTwoMinOneSquared * this.scale
        push()
        translate(this.pos.x, this.pos.y)
        // Style the shape.
        strokeWeight(1);
        // Start drawing the shape.
        // Only draw the vertices.
        beginShape();
        // Add the vertices.
        vertex(a + b, (1 * this.scale) - b);
        vertex(a,(1 * this.scale) - b);
        vertex(a, a + b);
        vertex(b, a + b);
        vertex(b, a);
        vertex(a, a);
        vertex(a, b);
        vertex(a + b, b);
        vertex(a + b, a);
        vertex((1 * this.scale) - b, a);
        vertex((1 * this.scale) - b, a + b);
        vertex(a + b, a + b);
        // Stop drawing the shape.
        endShape(CLOSE);
        pop();

    }
    getChildren(){
        var children = [];
        const a = sqrtTwoMinOne * this.scale
        const b = sqrtTwoMinOneSquared * this.scale
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                var child = new Cross(
                    createVector(
                        this.pos.x + (i * (a + b)),
                        this.pos.y + (j * (a + b)
                    )), a)
                children.push(child)
            }
        }
        var child1 = new Cross(new createVector(this.pos.x,(this.pos.y + a)),b)
        var child2 = new Cross(new createVector((this.pos.x + a),(this.pos.y)),b)
        var child3 = new Cross(new createVector((this.pos.x + (this.scale - b)),this.pos.y + a), b)
        var child4 = new Cross(new createVector((this.pos.x + (a)),(this.pos.y + this.scale - b)),b)
        
        children.push(child1, child2, child3, child4)

        return children
    }
}


