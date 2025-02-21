// const prop=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(prop);

const chai={
    name:"jaat",
    price:400
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// Object.defineProperty(chai,"name",{
//     writable:false,
//     enumerable:false  //now we cannot iterate property name now
// });
chai.name="jaheer";
console.log((chai.name));
