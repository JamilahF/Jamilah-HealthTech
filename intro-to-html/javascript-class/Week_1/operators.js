// // Assignment operator
// let firstName="Lwanga";

// //Arithmetic operators
// x=y;
// x=x+y;
// x+=y; //This is the same as x=x+y
// total1+=20; //same as total=total+20*/

// let total =20;
// //total+=30;
// total%=20
// console.log(total);
// let chicks=100;
// const price=1650;
// totalBill=chicks*price;

// console.log(totalBill);

// Comparison operators
// >= greater than or equal to, 
// <= less than or equal to
// != not equal to
// == compare 2 objects this is the loose equal
// === this is a Strict equal

//logical operators
// And && , 
// Or ||, 
// Not !,

let farmerAge=27;
if (farmerAge >= 20 && farmerAge<= 30){
    console.log("Eligible for chicks");
}
let a=5;
let b="5";
console.log(a===b); // strict equal returns false in this case
console.log(a==b); //loose equal returns true in this case

//Concatenation
// joining two words together
let farmerName="vivian";
let chickType ="Broilers";
console.log("Goodmorning"+ " " + farmerName + " "+"You have ordered for:" +" "+ chickType);