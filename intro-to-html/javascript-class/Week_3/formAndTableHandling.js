
const form = document.getElementById('chicksForm');

//Form Handling
form.addEventListener('submit', function (event) {
    event.preventDefault()

    
    const name = document.getElementById('farmerName').value;
    const age = Number(document.getElementById('farmerAge')).value;
    const quantity = Number(document.getElementById('quantity').value);
    const type = document.getElementById('chickType').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.textContent = "";
    if(!name || !type) { //Basic validation
        errorMsg.textContent="Please fill out all the fields";
        return;
    };  
    if(age<20 || age>30){
        errorMsg.textContent="age must be between 20 and 30";
        return;
    };
    if(quantity<100 || quantity> 500){
        errorMsg.textContent="quantity should be between 100 and 500";
        return;
    };
    addToTable(name,age,type,quantity);
    form.reset();
});


//Table handling
function addToTable(name, age, type, quantity) {
    const table =

};