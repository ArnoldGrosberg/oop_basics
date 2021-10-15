
class Shape{
	constructor(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
  this.calcPerimeter = function calcPerimeter() {
    return this.sideLength * this.sides;
  }
}
}
class Square extends Shape{
  constructor(sideLength) {
    super("square" ,4 ,sideLength);
  }
  calcArea(){
    return this.sideLength * this.sideLength
  }

}
let square = new Square(5);
console.log(square.calcPerimeter());
console.log(square.calcArea());