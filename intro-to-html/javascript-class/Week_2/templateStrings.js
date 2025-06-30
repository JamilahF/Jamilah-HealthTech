// // 3ways of defining strings
// single quotes 'Hello world'
// back-ticks `Hello World`
// double quotes "Hello World"

//Escape character

console.log("This is line \"one \" this is line 2");

//With back-ticks whatever you write is what comes out

console.log(`This is line "one" 
    this is line 2`);

//String interpolation ||You can write javascript in the string inside ${}
console.log(`This is line one This is line 2 ${20+2}`)

let name = "kimuli";
let age = 8;
let message =`Hello Bahiga ${name} you are ${age} years old. Next year you will be ${age+=1}`;
console.log(message);
