// let name = "jamilah";
// function greetFarmer() {

//     console.log("Hello, welcome to Young4Chicks", name);
// };
// greetFarmer();

// function submitRequest() {
//     let lastName = "jaques";
//     console.log("Your chick request has been submitted", lastName);
// };

// function calculateTotalCost(quantity, pricePerChick) {
//     return quantity * pricePerChick;
// };
// console.log(calculateTotalCost(2, 5));
// submitRequest();

// function getApprovalStatus(requestedChicks) {
//     if (requestedChicks <= 500) {
//         return "Approved";
//     } else {
//         return "Rejected";
//     }
// }
// let status = getApprovalStatus(300);
// alert("Request status:" + status);


// function greetFarmers(farmerName) { //let greetFarmers=function(farmerName) makes it an anonymous function
//     console.log("hello" + " " + farmerName + " " + "welcome to young 4 chicks")
// };


// greetFarmers("musa");
// greetFarmers("muhammad");
// greetFarmers("abdul");

// //function taking another function as parameter

// function processTheMoney(callback) {
//     callback();
// };

// processTheMoney(function () {
//     console.log("colleagues, Money will come!")
// });

// //Function producing a function

// function greetTeacher(lname) {
//     return function () {
//         console.log("hello," + " " + lname + " " + "welcome to my school");
//     };

// };
// let greet = greetTeacher("AsSalaamAlaikum!");
// greet();

// let number1 = prompt(`enter number`);
// if (number1 > 0) {
//     alert(`${number1} is positive`);
//     console.log(`${number1} is positive`);
// } else if (number1 < 0) {
//     alert(`${number1} is negative`);
// } else {
//     alert(`the number is zero`);
// };


// //Switch 
// let number = prompt(`Enter Number`);
// switch (true) {
//     case number > 0:
//         alert(`${number}is positive`);
//         console.log(`${number} is positive`);
//         break;
//     case number == 0:
//         alert(`${number} is zero`);
//         console.log(`${number} is zero`);
//         break;
//     case number < 0:
//         alert(`${number} is negative`);
//         console.log(`${number} is negative`);
//         break;
//     default:
//         alert(`${number} is invalid`);
//         console.log(`${number} is invalid`);
// };


// let dayInput = prompt(`What day is it today`);
// let day = dayInput.toLocaleUpperCase;
// switch (true) {
//     case day == `monday`:
//         alert(`Today is ${day}`);
//         break;
//     case `tuesday`:
//         alert(`Today is ${day}`);
//         break;
//     case `wednesday`:
//         alert(`Today is ${day}`);
//         break;
//     case `Thursday`:
//         alert(`Today is ${day}`);
//         break;
//     case `Friday`:
//         alert(`Today is ${day}`);
//         break;
//     default:
//         alert(`Office closed`);
//         break;
// }

let day = prompt(`What day is it today`);

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        alert`Start of the work week`;
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek days");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}

