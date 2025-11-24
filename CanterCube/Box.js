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
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    for (let k = -1; k < 2; k++) {
                        if (abs(i) + abs(j) + abs(k) > 2 ) {
                            var cord = createVector(
                                    parent.x + i * (parent.size * 1/3),
                                    parent.y + j * (parent.size * 1/3),
                                    parent.z + k * (parent.size * 1/3));
                            console.log(cord)
                            var child =  new Box(cord, parent.size * 1/3)
                            children.push(child);
                        }
                    }
                }
            }
        })
        return children;
    }
    
    show(){
        translate(this.pos)
        box(this.size)
        resetMatrix()
    }

}

