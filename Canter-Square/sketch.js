
var boxes = []

function setup() {
  createCanvas(400, 400);

  slider = createSlider(0, 7, 0);
  slider.position(410, 10);
  slider.size(80);

  var s = new Square(new createVector(0, 0), 400)
  boxes.push(s)

  for (let i = 0; i <= 5000; i++) {
    boxes = boxes.concat(boxes[i].cutInToFourths())

  }
}

function draw() {
  background(255);
  var rangeOfSet = getRange(slider.value());
  for (let i = rangeOfSet.x; i <= rangeOfSet.y; i++) {
    boxes[i].show()
  }


}

function getRange(iteration) {
  if (iteration == 0) {
    return new createVector(0,1);
  }
  var low = 0
  for (let j = 0; j < iteration - 1; j++) {
    low += Math.pow(4,j)
  }

  var high = 0
  for (let k = 0; k < iteration; ++k) {
    high += Math.pow(4,k)
  }
  return new createVector(low, high - 1)
}
