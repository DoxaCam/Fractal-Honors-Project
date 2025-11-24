var s = [];

function setup() {
  createCanvas(1000, 1000);

  slider = createSlider(0, 5, 0);
  slider.position(700, 0);
  slider.size(80);


  var cross = new Cross(new createVector(0,0),700);
  s.push(cross)
  console.log(s)
  s = s.concat(s[0].getChildren());

    for (let i = 0; i < 10000; i++) {
      s = s.concat(s[i].getChildren());
    }

   // s = s.concat(s[].getChildren());
    console.log(s)
}

function draw() {
  background(255);

  square(700, new createVector(0,0))
 
   var rangeOfSet = getRange(slider.value());
  for (let i = rangeOfSet.x; i <= rangeOfSet.y; i++) {
    s[i].drawShape();
  } 
}

function getRange(iteration) {
  if (iteration == 0) {
    return new createVector(0,0);
  }
  
  var high = 0
  for (let k = 0; k < iteration + 1; ++k) {
    high += Math.pow(8,k) + Math.pow(slider.value(),k)
  }
  return new createVector(0, high)
}