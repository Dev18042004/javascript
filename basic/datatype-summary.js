// primitive

//7 type:string,number,boolearn,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

//reference(non primitive)
//array,objects,functions


const heros=["shakiman","nagraj","doga"]
let myObj={
    name:"dev",
    age : 18,
}

const myFunction=function() {
    console.log("hello world");

    
}

console.log(typeof outsideTemp);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//type of memory stack (primitive),heap(Non-primitive)

let myyoutubename="devpatelcom"

let anothername=myyoutubename
anothername="chaiaurcode"
console.log(myyoutubename);
console.log(anothername);
let userone={
    email:"dev@google.com",
    upi:"dev@paytm",
}
let usertwo=userone
usertwo.email="dev@google.com"
console.log(userone);
console.log(usertwo);