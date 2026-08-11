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

// console.log(asdfg);
//let asdfg = 123;//brcause you not iniialized before declaretion at this time

//object literal is write with this{}
let obj = {
    name :"ali",
    age: 23,
}
console.log(obj.name,obj.age);


//property = data inside in obj
let abb ={
    ok: 12,
    ko: 32,

}
console.log(abb.ok, abb.ko);//the ko and ok is property

//method a function inside in object

let abbe = {
    name: 45,
        greeet(){
         console.log("jrllo");
         
    }
};
abbe.greeet();

let THis = {
    nama: "ali",
    yos(){
        console.log(this.nama);
        
    }
};


THis.yos();

//this keyword
let out = {
    name1234: "ali ahmad",


      name(){
        console.log(this.name1234);
        
}
}
out.name();

//simple obj 
let simple = {
    name21 : "qauum",
    age: 21,
}
console.log(simple);
//with destructuring
let des_simple ={
    name34:"ummah",
    age34:54,
};
const {name34: alak, age34:jenay} = des_simple;
console.log(alak);
console.log(jenay);

//destructuring 2nd example
let second = {
    ok : "kha",
    omaar: 34,
}
console.log(second);
let {ok:na, omaar:wakht} = second;
console.log(na);
console.log(wakht);


//nested object
let nested_obj = {
    okk: "ao ao",
    kko: "oa oa",

    addreesss:{
         kok: "aoa",
         okkk: "oaa",
    }
};
console.log(nested_obj.addreesss.kok);
console.log(nested_obj);
// console.log(addreesss);

//++++++++//
//method of object

let method = {
    NAME: "hashim",
}
console.log(Object.values(method));
console.log(Object.keys(method));
console.log(Object.entries(method));

//freeze is lock object not add delete and update,,,,...
let fREEzE = {
    nAme: "alooo",
};
//Object.freeze(fREEzE);
fREEzE.nAme = "Haas";
console.log(fREEzE.nAme);
//seal object is allowed to only changed not delete and add new ..
let changed = {
    nama: "ahmad",
    
}
Object.seal(changed);
changed.nama = "ali";
console.log(changed);
//object assign is to allowed to copy one data object into another
let aSSign = {
    address: "swabi",
}
let ASSign = {
    Affress: "kpk",
}
Object.assign(aSSign, ASSign);
console.log(aSSign);

//Number / math 
//the number is used in js for both int and float
//like
let amm = 12;
console.log(typeof(amm),amm);

let ann  = 12.23;
console.log(typeof(ann), ann);


 //math used

 let aii = 4.1;
 console.log(Math.ceil(aii));
  console.log(Math.max(aii));
   console.log(Math.floor(aii));
  console.log(Math.min(aii));
   console.log(Math.random(aii));
      console.log(Math.round(aii));

let another = "213";
console.log(parseInt(another));
    
 
 let aokk = "23.19";
 console.log(parseFloat(aokk));
 
 let akaw  = BigInt(129494912941949014);
 console.log(typeof(akaw));
 
 let numberrR = Number("34+hello");
 console.log(numberrR);
 
 console.log(12/0);
 
console.log(-43/0);


//date object work with date and time

let today = new Date();
console.log(today);
 console.log(today.getFullYear());
 console.log(today.getSeconds());
 console.log(today.getDate());
 console.log(today.getMonth());
 console.log(today.getDay());
 console.log(today.getHours());
 console.log(today.getMinutes());
//Intl.DateTimeFormat("en-UK").format(dateEd) is format or nice to show date
 let dateEd = new Date();
 let formated = new Intl.DateTimeFormat("en-UK").format(dateEd);
 console.log(formated);
 
 let ok_date = new Date();
 let Formated = new Intl.DateTimeFormat("en-US").format(dateEd);
 console.log(Formated);
 

 let yea =  new Date();
 let ok_kha = new Intl.DateTimeFormat("en-US",{
    year: "numeric",
    month: "short",
    day: "numeric",
 }).format(yea);
 console.log(ok_kha);

 //class
class pperson {
    greatt(){
        console.log("hello is formality");
        
    }
   
}
  const personn1 =  new pperson;
  personn1.greatt();

  //class is blueprint for object created..

  class okkha {
    okla(){
        console.log("kja kha jaa");
        
    }
  }
  const copy  = new okkha;
  copy.okla();

  //constructor
  //is a method that automatically run when we create an object..
  class automatic {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

  }
  const new_ok  = new automatic("alli", 334);
  console.log(new_ok.name);
  console.log(new_ok.age);
  console.log(new_ok);
//ok extends is used to inherit properties and method from  another class
class one {
    ONE(){
        console.log("ok one print");
        
    }
}
class two extends one {
    TWO(){
        console.log("ok this two already print");
        
    }
}

const three  = new two;
three.ONE();
three.TWO();

class hi{

    GI(){
        console.log("fi");
        
    }
}
class HI  extends hi{
    pi(){
        console.log("gi ji hi");
        
    }
}
const ok_hi = new HI;
ok_hi.pi();
ok_hi.GI();

//super call parent class constructor or method inside child class
class parent{
    constructor(name){
        this.name = name;
    }
}
class child extends parent{
    constructor(name, course){
         super(name);
        this.course = course;
    }
   
}
const namais = new child("ali", "computer science");
console.log(namais.name);
console.log(namais.course);

//2nd example
class FIRST{
    constructor(age){
        this.age = age;

    }

}
class SECOND extends FIRST{
    constructor(name, age){
        super(age);
        this.name= name;
    }
}

const agha = new SECOND("ali", 323);
console.log(agha.name);
console.log(agha.age);
//static
//is used to create property or method to belong  only the class itself not object//

class itself{
   static add (a,b){
        return a+b;
    }
}
console.log(itself.add(1,4));

class bazat {
    static sub(a,b)
    {
      return a-b;
    }
}
console.log(bazat.sub(3,43));


//get is used in class allow us to access a property
class give{
    constructor(name,lai){
        this.name = name;
        this.lai;
    }
    get pick(){
        return this.name;
    }
}
const pack = new give("ali", "ok");
console.log(pack.pick);


//set is used to change a value
class SET {
    constructor(name, hi){
        this.name= name;
        this.hi = hi;
    }
    set UsErNamE(newname){
        this.name = "ahmad";
    }
}
const ok_new = new SET("ali", "hello");
ok_new.UsErNamE = "ahmad";
console.log(ok_new);


//# is name private and can only be accessed in inside class 
class bankaccount {
    #balance = 1000;

    giveaccount(){
        console.log(this.#balance);
    }
}
const pick_account = new bankaccount;
pick_account.giveaccount();

// encapsulation used to private all informationn same private example

class open {
    #close = 9000;
    not_open(){
        console.log(this.#close);
    }
}
const ok_open = new open;
ok_open.not_open();

//inheritance copy from parent class property and method
class kha_kha{
    naa(){
        console.log("kha_naa");
        
    }
}
class naaaa extends kha_kha{
    aaoo(){
    console.log("sai shwa");
    }
}
const oho = new naaaa();
oho.aaoo();
oho.naa();

//abstraction hide the unnecessory details and show the information important 
class important{
    GREAT(){
        console.log("hi hello");
        
    }
}
const imp = new important;
imp.GREAT();
//polymorpism 
//same method different behaviour
class kutha {
    sound(){
        console.log("woof");
        
    }
}
class cat{
    sound(){
        console.log("meomeo");
        
    }
}
const CAT = new cat;
const DOG = new kutha;
CAT.sound();
DOG.sound();
