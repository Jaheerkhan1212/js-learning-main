//for of
const  arr=[1,2,3,4];
for (const element of arr) {
    console.log(element);
}
const greeting="hello world";
for (const element of greeting) {
    console.log(element);
}

//maps
const map=new Map;
map.set('a','jaheer');
map.set('b','jaheer');
map.set('c','jaheer');
for (const [key,value] of map) {
    console.log(`key is ${key} and value is ${value}`);
}

//objects are not iterable by for of

const user={
    name:"jaheer",
    age:22
}
for (const key in user) {
   console.log(`${key}--> ${user[key]}`);  //key is key of object
}
for (const key in arr) {
    console.log(key); //gives index and can get arr[key]
    
}
// for(const key in map){
//     console.log(key);
            //   it is not iterable
// }