// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
// The binary number returned should be a string.

// number.toString(2); => هيك منخليه يتحول لباينري (ترميز ثنائي)
// parseInt("1010", 2); => هيك منحلول لرقم عشري يعني رح يطبع(10)

const addBinary = (a,b) => (a + b).toString(2);

console.log(parseInt("1010" , 2)); 
