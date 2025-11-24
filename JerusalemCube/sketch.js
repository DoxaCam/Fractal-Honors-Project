iterations = [];
var iter = 0;

function setup() {
  createCanvas(2000, 1500, WEBGL)
  setAttributes({ antialias: false });
  normalMaterial();

 
  cam = createCamera();
  cam.setPosition(1000, -2000, 1000);
  cam.lookAt(0, 0, 0);
  

  iterations.push([new Box(createVector(0,0,0), 1000)]);
  iterations.push(Box.getChildren(iterations[0]));
  iterations.push(Box.getChildren(iterations[1]));
  iterations.push(Box.getChildren(iterations[2]));
  console.log(iterations)

}

function draw() {
  background(0);
  orbitControl();

    if (frameCount % 120 === 0) {
      
      reverse == false;

      if (reverse == false) {
        iter++
      }

      if (reverse == true) {
        iter--
      }

      if (iter == 0) {
        reverse = false

      }
      if (iter == 3) {
        reverse = true;
      }
      
    }

    iterations[iter].forEach(box => {
      rotateY(frameCount * 0.001);
      rotateX(frameCount * 0.001);
      rotateZ(frameCount * 0.001);
      box.show()
    });

  
}
