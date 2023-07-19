class Dog{
    constructor(breed, age, color) {
        this.breed=breed;
        this.age=age;
        this.color=color;
    }
    eat(){
        console.log(this.breed+" is Eating");
    }
    sleep(){
        console.log(this.breed+" is Sleeping");
    }
    sit(){
        console.log(this.breed+" is Sitting");
    }
    run(){
        console.log(this.breed+" is Running");
    }
}
const pug= new Dog("Pug",3, "Black");
const boxer= new Dog("Boxer",2, "White");
const poodle= new Dog("Poodle",1, "Brown");

console.log(`Pug is ${pug.age}`);
pug.eat();
console.log(`Boxer is ${boxer.color}`);
boxer.sit();
console.log(`Poodle is ${poodle.age}`);
poodle.sleep();
