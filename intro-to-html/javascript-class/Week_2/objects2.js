// // car.name="porsche";
// // car.model="718SpyderRS";
// // car.weight=3214;
// // car.color="gold";

// let carName="jeep"
// let carModel="compass";
// let carWeight=4800;
// let engineName="GSE-T4"


// //Methods of car object
// let carStart=function(){
//     console.log("vroom");
// };

//declaring car object

let car={
 carName:"jeep",
 carModel:"compass",
 carWeight:4800,
 engineName:"GSE-T4",

 start: function(){
    console.log("vroom")
 },
 drive: function(){
    console.log("car is moving")
 },
 brake: function(){
    console.log("zrrr...")
 },
 stop: function(){
    console.log("car has stopped")
 }
};

car.carName;
car.carModel;
car.carWeight;
car.engineName;

car.stop();
car.brake();
car.start();
car.start();

let farmer={
    name:"jamilah",
    age:30,
    isRegistered:false,

    greetFarmer: function(){
        console.log("Welcome"+" "+this.name+" "+ " ")
    },
    chickRequest: function(quantity){
        console.log(this.name + " " + "requested for"+" "+ quantity+ " "+"chicks")
    }
};
console.log(farmer.age)
farmer.greetFarmer();
farmer.chickRequest(700);