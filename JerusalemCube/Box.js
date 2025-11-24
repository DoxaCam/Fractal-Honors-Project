class Box {
    constructor(pos, size){
        this.size = size;
        this.pos = pos;
        this.x = pos.x;
        this.y = pos.y;
        this.z = pos.z;
    }

    static getChildren(parents) {
        console.log(parents)
        var children = [];
        parents.forEach(parent => {
            const a = sqrtTwoMinOne * parent.size
            const b = sqrtTwoMinOneSquared * parent.size
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    for (let k = -1; k < 2; k++) {
                        if (abs(i) + abs(j) + abs(k) > 2 ) {
                            var cord = createVector(
                                    parent.x + (i * b * 1.7),
                                    parent.y + (j * b * 1.7),
                                    parent.z + (k * b * 1.7));
                            console.log(cord)
                            var child =  new Box(cord, a)
                            children.push(child);
                        }
                    }
                }
            }
            var xd = parent.x
            var yd = parent.y
            var zd = parent.z


            var child2 = new Box(createVector(xd + -a,yd + a,zd),parent.size * sqrtTwoMinOneSquared)
            var child1 = new Box(createVector(xd + a,yd + a,zd),parent.size * sqrtTwoMinOneSquared)
            var child3 = new Box(createVector(xd + a,yd + -a,zd),parent.size * sqrtTwoMinOneSquared)
            var child4 = new Box(createVector(xd + -a,yd + -a,zd),parent.size * sqrtTwoMinOneSquared)
            
            var child5 = new Box(createVector(xd,yd + -a,zd + a),parent.size * sqrtTwoMinOneSquared)
            var child6 = new Box(createVector(xd,yd + a,zd + -a),parent.size * sqrtTwoMinOneSquared)
            var child7 = new Box(createVector(xd,yd + a,zd + a),parent.size * sqrtTwoMinOneSquared)
            var child8 = new Box(createVector(xd,yd + -a,zd + -a),parent.size * sqrtTwoMinOneSquared)

            var child9 = new Box(createVector(xd + a,yd,zd + a),parent.size * sqrtTwoMinOneSquared)
            var child10 = new Box(createVector(xd + a,yd,zd + -a),parent.size * sqrtTwoMinOneSquared)
            var child11 = new Box(createVector(xd + -a,yd,zd + a),parent.size * sqrtTwoMinOneSquared)
            var child12 = new Box(createVector(xd + -a,yd,zd + -a),parent.size * sqrtTwoMinOneSquared)


            children.push(child1, child2, child3, child4, child5, child6, child7, child8
                ,child9,child10,child11,child12
            )
        })
        return children;
    }
    
    show(){
        translate(this.pos)
        box(this.size)
        resetMatrix()
    }

}

