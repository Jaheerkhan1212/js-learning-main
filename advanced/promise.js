// const promise=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//      console.log('async task 1');
//      resolve();
//     },1000)
// })
// promise.then(()=>{
//     console.log('task1 resolved');
// })
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//      console.log('async task 2');
//      resolve();
//     },1000)
// }).then(()=>{
//     console.log('task 2 resolved');
    
// })

// const promisethree=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//      console.log('async task 3');
//      resolve({name:"jaheer",
//         class:"second"
//      });
//     },1000)
// })
// promisethree.then((user)=>{
//     console.log(user);
// })
// const promisefour=new Promise((resolve,reject)=>{
// let error=true;  //at false resolve will true
// if(!error){
//     resolve({username:"jaheer",
//         class:"12th"
//     });
// }
// else{
//     reject('ERROR:Something went wrong!');
// }
// })

// const x=promisefour.then((user)=>{
// return user.username;
// }).then((name)=>{
//     console.log(name);
// }).catch((error)=>{console.log(error);
// }).finally(()=>{
//     console.log("the promise is resolved or rejected");
    
// });
// // console.log(x);
// const promisefive=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false;  //at false resolve will true
//         if(!error){
//             resolve({username:"jaheer",
//                 class:"12th"
//             });
//         }
//         else{
//             reject('ERROR:Something went wrong!');
//         }   
//     },1000)
// })

// //async await do not handle errros directlty
// async function check() {
//     try {
//         const response=await promisefive
//         console.log(response );
        
//     } catch (error) {
//        console.log(error);
        
//     }
// }
// check();

//fetch
// async function getallusers() {
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')  
//    const res= await response.json();
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getallusers();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
})

//agla then pehle then k baad hi execute hote h