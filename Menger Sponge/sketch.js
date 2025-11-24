

var canvasW = 400;
var canvasH = 400;

var boxes = [];

function setup() {
  createCanvas(canvasW, canvasH);
  slider = createSlider(0, 5, 0);
  slider.position(410, 10);
  slider.size(80);

  var startSquare = new Square(canvasW, new createVector(0,0), false);
  boxes.push(startSquare);
  var iteration  = [0,1,10,82,658,5266]

  for (let i = 0; i < iteration[5]; i++) {
    if (boxes[i].isFilled == true) {
        boxes[i].cut()
    }
  }

  console.log(boxes)
}

function draw() {
  background(122);
  let g = slider.value();
  var iteration  = [0,1,10,82,658,52660]
  for (let index = 0; index < iteration[g]; index++) {  
    boxes[index].show()
  }
}


class Square {
  constructor(side, pos) {
    this.side = side;
    this.pos = pos
    this.cuts = [];
    this.isFilled = true
  }
  
  cut() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const scalar = this.side / 3
        var newSquare  = new Square(scalar, new createVector(this.pos.x + (scalar * i), this.pos.y + (scalar * j)))
        if (i !== 1 || j !== 1) {
            newSquare.isFilled = true;
        } else {
            newSquare.isFilled = false;
        }
        this.cuts.push(newSquare)
      }
      boxes = boxes.concat(this.cuts)
      this.cuts.splice(0, this.cuts.length);
    }
  }

  show() {
    strokeWeight(1);
    noFill();

    if (this.isFilled == true) {
      fill (222)
      square(this.pos.x,this.pos.y, this.side);
    } else {
      fill (0)
      square(this.pos.x,this.pos.y, this.side);
    }

  }
  showPoint() {
    strokeWeight(5);
    point(this.side / 2, this.side / 2);
  }
}
