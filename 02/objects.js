//singleton  object.create
const sym=Symbol("1234");
//literal object
const user={
    name:"jaheer",
    class:5,
    email:"jk@gmail.com",
    "a boy":"first",
    [sym]:"123"
}
// console.log(user.name);
// console.log(user["name"]);
// // console.log(user.a boy);  cannot access it using this method
// console.log(user["a boy"]);
// console.log(user[sym]);

// console.log(user);
// Object.freeze(user); ///after this statement no value of user will be changed

user.greeting=function(){
    console.log("hello jaheer");
}
console.log(user.greeting); //reference of function
console.log(user.greeting()); //run the function






