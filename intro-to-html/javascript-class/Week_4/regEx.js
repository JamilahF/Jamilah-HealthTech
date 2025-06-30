let emailPattern;
let phonePattern;

let urlPattern;
let farmerNamePattern = /^[A-Za-z]+$/;
let farmerName = prompt('Enter your name');console.log(farmerNamePattern.test(farmerName));
let ninPattern = /^[A-Za-z0-9]{14}$/;
let nin = prompt('Enter NIN');
console.log(ninPattern.test(nin));
let emailPattern = /^[a-zA-Z0-9-_%+]+@[a-zA-Z0-9,-]+\.[a-zA-Z]{2,}$/;