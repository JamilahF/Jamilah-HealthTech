//ES5 2015 and below Vs ES6 2015 and beyond
//EcmaScript  (European Computer Manufacturing Association)
// To connect two JavaScript
let farmer = {
    name: "Andrew",
    age: 35,
    location: 'kla',
    requestChicks: function(quantity) {
      return this.name + " requested " + quantity + " chicks.";
    }
  };
// module.exports = farmer; //ES5 syntax 
export default farmer; //ES6 syntax 