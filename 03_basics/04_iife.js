// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB Connected`);
// }
// chai();


// To resolve the problem of global scope pollution problem
// to remove the global scope variables and declaration pollution we use IIFE

(function chai(){
    // Named IIFE
    console.log(`DB Connected`);
})();

( function aurCode() {
    console.log(`Not Connected`);
} )();

( () => {
    console.log(`DB Two Connected`);
})();

( (name) => {
    // Simple IIFE or Unnamed IIFE
    console.log(`${name} not connected`);
} )('Ankush');