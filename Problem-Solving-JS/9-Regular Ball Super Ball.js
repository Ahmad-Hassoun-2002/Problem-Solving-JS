// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

var Ball = function(ballType = "regular") {
  this.ballType = ballType;
};

let ball1 = new Ball();
let ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);

