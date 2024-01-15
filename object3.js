//constructor function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

let circle = new Circle(1);
console.log(circle);
console.log(circle.draw());
