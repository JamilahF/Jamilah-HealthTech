// //Five ways of creating objects in JS
//     // Plain parentheses{} aka Object Literals
//     const myObject = {
//         property1 : 'value1',
//         property2: 'value2',
//         method1(){
//             console.log('hello from method1');
//         },
//         method2: function(){
//             console.log("Hello from method 2");
//         }
//     };
//     //console.log(Object.getPrototypeOf(myObject));
//     console.log(myObject);

    //Using object.create method()
    const animal = {
       sound : 'animalSound',
       makeSound: function(){
        console.log(this.sound)
       },
       makeSounds(){
        return `Hello ${this.sound}`
       }

    }
    const dog = Object.create(animal);
    dog.sound = 'rooo';
    dog.makeSound();
    console.log(dog.makeSounds());

    //Third way of creating Objects is using Constructor functions
    function Person(name,age){      //We use capitalized naming to show that this is a constructor function
        this.name = name;
        this.age =age;
        this.greet = function(){
            console.log(`Hello my name is ${this.name}`)
        };
    }
    let person1 = new Person('hamzah',39); //We use new keyword to instanciate a new object
    let person2 = new Person('yasin',20);
    let person3 = new Person('mukisa', 28);
    let person4 = new Person('hellen', 30)
    console.log(person1);
    person1.greet();

    // Fourth way is Using ES6 classes || Syntactic sugar
    class Car {
        constructor(make,model){
            this.make = make;
            this.model = model;
        }
        start() {
            console.log(`${this.make}  ${this.model} is starting`);
        };
    }     
    const car1 = new Car ('porsche','spyder');
    const car2 = new Car('Toyota','harrier');
    const car3 = new Car('Bugatti','Veriyon');
    const car4 = new Car('Benz','S - class');
    car4.start();

    //Fifth method : Factory Function . Using a function to return Objects
    function createProduct(name,price){
        return{
            name: name,
            price: price,
            displayInfo: function(){
                console.log(`Product: ${this.name}, Price ${this.price}`);
            }
        }
    }
    const product1 = createProduct('Laptop', 1000);
    const product2 = createProduct('smartPhone',500);
    product1.displayInfo(); //

    //Inheritence
    class Animal{
        constructor(name){
            this.name = name;
            // this.type = "Animal";
        }
    
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
class Dog extends Animal{
    constructor(name){
        // super(breed); //Call constructor of parent class.
    }
    speak(){
        console.log(`${this.name} barks`);
    }
}
let simba = new Dog("Simba");
simba.speak(); //Simba barks

//Polymorphism
//Methods of the class have the same name but behave differently

class User {
    login(){
        console.log("User logged in");
    }
}
class Host extends User{
    login(){
        console.log("Host logged in with elevated previlages");
    }
}