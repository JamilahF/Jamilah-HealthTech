//Document Object Model
//The document stands for your entire html and css
//Tree like structure with objects
// console.log(document);
// console.log(window);

//DOM Methods
//console.dir(document.body);
// getElementById(); //selects element by ID
// getElementsByClassName(); //selects an element by class
// getElementByTagName(); //selects html elements by tagname eg <p>, <h1> ,<h2>,
// querySelector(); //selects the first matching css class. //It can also be used for id's and html tags
// querySelectorAll();//gives an array or list selects all matching elements

// const allTitles = document.getElementsByTagName('h1');
// console.log(allTitles);

// const firstTitle = document.getElementById('heading_1');
// console.log(firstTitle);

// const firstTitle= document.querySelector('.title');
// const firstTitle= document.querySelector('#title');
// const firstTitle= document.querySelector('h1');

const allTitles= document.querySelectorAll('h1');
allTitles[3].className = 'title';
allTitles[3].textContent =" Heading Four";
allTitles[2].style.color="red";
allTitles[0].style.fontFamily="verdana";
allTitles[1].style.backgroundColor="yellow";

// allTitles.setAttribute();
// allTitles.remove();

//Create- Craete/get
//Read -  
//Update -
//Delete -