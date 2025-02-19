//primitive(call by value)->Number,String,null,undefined,symbol,bigint,boolean
const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id);
console.log(id==anotherId);

//Refrence(Non primitive)->Array ,objects,functions
const arr=["hello","zaheer"];
let obj={
    name:"jaheer",
    age:20
}
const myfunction=function(){
    console.log("zaheer");
}

//non primitive ka datatype object aata hai

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//primitive type in stack and non primitive type in heap
//in stack copy of datatype is stored while in heap reference is given

let a="zaheer";
let b=a;
b="sameer";
//here b!=a but in case of object
 let obj1={
    name:"zaheer"
 }
 let obj2=obj1;
 //reference of obj1 is given to obj 2
 obj2.name="sameer";
 //here now both the objects value changes to sameer due to refernce passed