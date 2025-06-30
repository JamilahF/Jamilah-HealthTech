//browser storage usually used for cookies. (Browsers give a limit of up to 5mbs)
    //localStorage
        //local storage stores data untill you remove it manually
            //is like a simple notebook 
                localStorage.setItem('name','John'); //set item
                localStorage.getItem('name'); //Get item
                localStorage.clear(); //Clear all items
                localStorage.removeItem('name');

    //sessionStorage
        //session storage stores data for the duration of the page session
        sessionStorage.setItem('sessionName', 'Jane Doe'); //Set item
        sessionStorage.getItem('sessionname'); //get item
        sessionStorage.clear(); //Clear all items
        sessionStorage.removeItem('sessionName'); //Remove specific item
    //cookies
        //cookies 
//indexedDatabase

JSON.stringify(localStorage); //Convert LocalStorage to JSON string

let user = {
    name: 'John Doe',
    age: 30,
}
localStorage.setItem('user' JSON.stringify(user)); //Store or saving or sending data
let data = JSON.parse(localStorage.getItem('user')); //Retrieve or getting data
