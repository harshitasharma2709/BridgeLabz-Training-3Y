// console.log("start");

// console.log("end");

// console.log("start"); // synchronous programming -

// function getUser(c){
// setTimeout(() => {
//     console.log("user data.......");
// },3000); // asynchronous programming - settimeout, setinterval, fetch, event
// }


function getUser(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("user data....");
        resolve();
    }, 3000);
});
}

function getUserDetails(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("user data details......");
        resolve();
    }, 1000);
});
}


function getUserInsurance(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("user data insurance........");
        resolve();
    }, 2000);
});
}



// function getUserDetails(){
// setTimeout(() => {
//     console.log("user data details.........");
// },2000);
// }


// // callback, promise, async await

// getUser(() => {
//     getUserDetails();
//     getUserInsurance();
// });

// console.log("end"); // synchronous programming

// let mypromise = new Promise((resolve, reject)=> {
//     let age = 10;
//     if(age>18){
//         resolve("age is valid")
//     } else {
//         reject("age is invalid")
//     }
// });

// mypromise
// .then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })


// Promise chaining
// getUser()
// .then(()=>)


// async function call(){
//     await getUser();
//     await getUserDetails();
//     await getUserInsurance();

// }
// call()
// console.log("end");




// Object creation: object literal, functional constructor, class, object.create()