const target={a:'1',
    b:'2',
    c:'3'
}
const source={
    a:'2',
    b:'5',
    d:'6'
}
const obj={target,source};  
// create objects inside obect
// console.log(obj);
// console.log(obj.target.a);

// const obj2=Object.assign(target,source);
// console.log(target);
// console.log(obj2); here obj2==target

// const obj3=Object.assign({},target,source);
// console.log(target);  //a new object is created {} so target !=obj3 here
// console.log(obj3);

// const obj4={...target,...source};
// console.log(obj4);   spread

console.log(Object.keys(target));  //array of keys
console.log(Object.values(target)); //array of values
console.log(Object.entries(target)); //2d array with key value
console.log(target.hasOwnProperty('a'));






