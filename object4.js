//dynamic nature of objects
const circle = {
    radius : 1
};
circle.color = "red";
circle.draw = function(){
    console.log("draw");
}
console.log(circle);
delete circle.color;
console.log(circle);
