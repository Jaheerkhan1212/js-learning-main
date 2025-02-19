const today=new Date;
// console.log(today.toString());
// console.log(today.toDateString());
// const mydate=new Date(2025,1,26);
// console.log(mydate.toDateString());
// const date=Date.now();
console.log(today.toLocaleString('default',{
    weekday:'long'
}));

