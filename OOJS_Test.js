
function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function calcPerimeter() {
    console.log(this.sideLength * this.sides)
  }
}
let square = new Shape('square', 4, 5);
square.calcPerimeter();
let triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();