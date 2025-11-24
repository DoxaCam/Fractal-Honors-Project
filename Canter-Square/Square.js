class Square {
  constructor(pos, size) {
    this.pos = pos;
    this.size = size;

  }
  cutInToFourths() {
    var cuts = [];
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          const scalar = this.size / 3
            var newSquare  = new Square(
              new createVector(
                this.pos.x + (2 * scalar * i ),
                this.pos.y + (2 * scalar * j )), scalar)
            cuts.push(newSquare)
        };
      }
      return cuts;
    }
  show() {
      strokeWeight(1);
      fill(0)
      square(this.pos.x , this.pos.y, this.size)
    }
  }
