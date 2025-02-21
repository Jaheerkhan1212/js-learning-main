// let myName="jaheer    ";
// // console.log(new myName.truelength());


// let myHeroes=["spider","super"];
// let heroPower={
// spider:"sling",
// super:"fist"   
// ,
// getSpidePower : function(){
// console.log(`power is ${this.spider}`);
// }
// }
// Object.prototype.jaheer=function(){
//     console.log('this is present in all objects');
    
// }
// // heroPower.jaheer();
// // myHeroes.jaheer();
// // array string and functions comes from object prototype
// Array.prototype.heyJaheer=function(){
//    console.log("hey jaheer");   
// }
// myHeroes.heyJaheer();
// // heroPower.heyJaheer();  not accessed


// //inheritence

// const user={
//     username:"jaheer"
// }

// const teacher={
//     maths:true
// }
// const TAsupport={
//     available:true,
//     __proto__:teacher  //inherit properties of teacher
// }
// // syntax2
// teacher.__proto__=user;
//syntax3  
// Object.setPrototypeOf(TAsupport,teacher); //latest syntax

let anotherName="chaipilo     ";
String.prototype.truelength=function(){
 console.log(`${this}`);
 console.log(`true length is ${this.trim().length}`);
}
anotherName.truelength();
"jaheer ".truelength();