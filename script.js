class Animal {
    speek(){
        console.log("hello");
    }
}
const dog = new Animal();
dog.speek();

class birds{
    okk(){
        console.log("bogg");

    }
}
const parrot = new birds();
parrot.okk();

//2nd method pf prototype.
const speech = {
    such(){
        console.log("heloo ali");

    }
};
const ok = Object.create(speech);
ok.such();

//ok this we again
const seek = {
    seak(){
        console.log("hello world name");
        }
}
const ko = Object.create(seek);
ko.seak();

//3rd method
const ms ={
    drrk() {
        console.log("hello world helo");
    }
} 
const hello = {};
Object.setPrototypeOf(hello, ms);
hello.drrk();

///type conversion
let  a = "4";
let  b = Number(a);
console.log(typeof b);

//type coercion
let w = "3";
let e = 3;
console.log(w+e);
//strict mode
"use strict";
let n =10;
//nullish coalescing??
let name = null;
console.log(name ?? "huss");

let ao = "name";
console.log(ao?? "suuss");
//optional chaining

let rt ={
    okss : "ali",
};
console.log(rt?.okss);
//function  declaration 
function declare(){
    console.log("hello declare");

}
declare();
//function expression
const great = function(){
    console.log("hello a function expression");
}
great();
//anonymous function is no name like function expression
const add = function(a, b){
    return(a+b);
}
add(1,2);

//arrow function we used => this sign 
let vowel = ()=>{
    console.log("a.e,i,o,u");
} 
vowel();
//or shorter
let consonant =(a,b)=>(a+b);
console.log(consonant(1,3));
//parameter
//if we assign or wite In inside the Function paranthesis they are called parameter e.g function(name) and argument is we recieve mean add(name); the name is argument.
function para(name){   // the name is parameter
    console.log("hello" + name);
} 
para("ALi");// ali is argument
//default parameter assign if not received or not pass 
function Default(name= "guest"){
    console.log("hello" + name)
}
Default();

//we used rest parameter if we collect the element as array
function aDD(...number){
    console.log(number);
}
aDD(1,2,3);
//spread syntax with function
function SSww(a,b,c){
    return(a+b+c);

}
const aadd  = [1,2,3];
console.log(SSww(...aadd));
//return in function used to give baxkup if you save or used and console is print,,,
function ret(a,b){
    return(a+b);
} 
const RET  = [1,3,2];
console.log(ret(...RET));
//callback function
//is a function that passed as an argument to a another function...
function calL(){
    console.log("hello");
}
    function rec(callback){
        callback();
    }

rec(calL);

function aS(){
    console.log("the callback function is a function that passed as an argument to another function");

}
function AS(callback){
    callback();
}
AS(aS);
//IIFE
(function(){
   console.log("IIFE function is that immediately run or call");
})()
//recursive function call itself again until the condition say stop.. 
function again(n){
    if(n===0){
        console.log(n);
        again(n-1);
    }
}
again(4);


function looP(m){
    if(m===0){
  return(m);
    }
  console.log(m);
  looP(m-1); //function call itself...
}
looP(7);
//pure function is a function that is same input same output
function same(a,b){
    return(a+b);
}
console.log(same(1,3));
console.log(same(1,3));
//generator function
//as a function that pause it execution and continoue later yeild = pause and next() = contioue
function* gen(){
    yield 1;
     yield 2;
      yield 3;
    
}
const okkk = gen();
console.log(okkk.next().value);
console.log(okkk.next().value);
console.log(okkk.next().value);

//async function is used in asynchronous operation
function geet(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
              resolve(
                "fata is nest"
              )
        },3000);
    })
}
async function  show(){
  const result  =  await geet();
  console.log(result); 
}
show();
//again practice
function dobara(){
    console.log("dobara");
}
dobara();

const dun = function(){
    console.log("gwwlo");

} 
dun();
//global scope 
// the global scope a variable is written outside from everywhere 
let ai = "ali is global";
function global(){
    console.log(ai);
}
global();
//local is  that variable that create inside a function
function local(){
    let lo = "ali is local";
    console.log(lo);
}
local();

//block is inside in this "{}"
if(true){
    let name12 = "ali is block";
    console.log(name12);
}
//console.log(name12);// if inside you console they show error
//lexical
// they acceess a varibale where they function created or written
let nmae23 = "alio";
function outer(){
    function inner(){
        console.log(nmae23);
        
    }
    inner();
}
outer();//because they access a variable created and they in this  in surrounding 
//or
function outter(){
    let ou = " this is in same scope called lexical";
    function innner(){
        console.log(ou);
        
    }
    innner();
}
outter();

//scope chain searches a variable not contain in inside a inner they move outside globaly;;
let sc = "123";
function scope(){
    let sa = "321";
    function scoope(){
        let sd = "4321";
        console.log(sa);
        console.log(sc);
        console.log(sd);
        
        
        
    }
    scoope();
}
scope();

//hoisting mean javascript know the variable declaration before reches that line of code simply 
//says you log first and declare last
console.log(asd);
var asd; 
asd = 12;

hoost();
function hoost(){
    let asdf = 55;
    console.log(asdf);/// this hosting
    
}

//tdz stand for temporal dead zone
//let and const is tdz is time when the let and const variable cannot be used before its declaration 

console.log(asdfg);
let asdfg = 123;//brcause you not iniialized before declaretion at this time
