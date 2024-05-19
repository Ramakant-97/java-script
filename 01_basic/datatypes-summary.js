/* there are two types of varible :-*/
// 1.primitive
// 2. Non-prmitive

// there are 7 types primitive data  types:-
// string,boolean,null,undefined,bigint,symbol,number

const score =100
const scorevalue=100.8
const isLoggedIn=false
const outSidetemp=null
let useremail;

const id=Symbol(123)
const anotherId=Symbol(123)

console.log(id===anotherId)

// reference(Non-primitive datatypes)
//Array, object, fuction

const heros = ["Saktiman","Nagraj","doga"]
let myObj = {
    name :"Ramakant",
    age:26,
}

const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof scorevalue);