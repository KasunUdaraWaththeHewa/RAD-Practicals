

var i=1;
class Rectangle{
    constructor(w,h) {
        this.width = w;
        this.height = h;
    }
    getArea(){
        return ("The Area of the rectangle "+(i++)+" is "+this.width*this.height);
    }
}
const rec1= new Rectangle(100,50);
const rec2= new Rectangle(80,150);
console.log(rec1.getArea());
console.log(rec2.getArea());