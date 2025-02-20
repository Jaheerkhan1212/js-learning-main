const User={
    username:"jaheer",
    login:56,
    loggedin:true,
    getDetails: function(){
        console.log(this);
        
    }
}
// user.getDetails();
// console.log(user.username);
function user(username,loggedin){
    this.username=username;
    this.loggedin=loggedin;
    return this;  //this is implicitly defined ,no need to write
}
// const userOne=user("jaheer",true);
// const userTwo=user("Abid",false);
// console.log(userOne);
// writing this directly will override userOne thats why we use new keyword to create a new instance

const userOne=new user("jaheer",true);
const userTwo=new user("Abid",false);
// console.log(userOne);  
// here does not override

//using new create a new object instance
//an constructer function is called
console.log(userOne.constructor);
console.log(userOne instanceof user);




