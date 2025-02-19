(function chai(){
    console.log("named iife"); //IIFE->immediatly invoked function expression
})();
((name)=>{
    console.log(`my name is ${name}`); //unnamed iife
})('jaheer');