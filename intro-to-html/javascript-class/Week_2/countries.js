// countries.js
var countries = [
'Uganda', 'Kenya', 'Tanzania', 'Burundi', 'Rwanda',
'Ethiopia', 'South Sudan', 'Somalia', 'DR Congo', 'Congo Brazaville', 'Algeria','Nigeria','Botswana','Malawi'
];

//Slice the first 10 countries
var firstTenCountries = countries.slice(0,10); //Slice is a method used to extract a portion of a string and return it  as a new array

// Log the result
console.log(`First 10 countries: ${firstTenCountries}`);
//alert(`First 10 countries: ${firstTenCountries}`);

//Find the middle country ||Middle index
const middleIndex =Math.floor(countries.length/2);

//Get the middle country
const middleCountry = countries.length % 2 === 0 ? [countries[middleIndex - 1],countries[middleIndex]] : countries[middleIndex];
console.log(`Middle country(s) is ${middleCountry}`);
//alert(`Middle country(s) is ${middleCountry}`);

//Divided arrays
//Find the Middle index
const midIndex = Math.ceil(countries.length/2);

//Divide into two halves
const firstHalf=countries.slice(0,midIndex);
const secondHalf=countries.slice(midIndex);

console.log(`First half: ${firstHalf}`);
console.log(`Second half: ${secondHalf}`);