//factory function to create objects
function createCircle(radius){
    return{
        radius, //equivalent to radius:radius [same name for key value pair]
        draw(){
            console.log("radius is ",radius);
        }
    };
}
let c1 = createCircle(5);
console.log(c1);
console.log(c1.draw());
