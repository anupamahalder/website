console.log('Hello World');
console.log('I love India');
console.log(4+5);
console.log('My favourite number is: '+ 7);
var myName = "Anupama Halder";
console.log(myName);
var age = 20;
console.log(age);
console.log(myName + ", she is a " + age + " years old girl");
var num = Number('32.97');
console.log(num);
console.log(Number.parseInt(num));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(1/0);
//This for variable declaration
let x;
x = 4;
console.log(x);
console.log("Anupama"+" "+"Halder")
/* var --> to contain a value
   let --> variables defined with let cannot be redefined/redeclared 
            and must be defined before use and have block scope
   
            */
// let x = 6;
let y = 'John';
var a = 5;
var a = 6;
//function
function sleep(){

}
//call the function
sleep();
//Block scope
{
    var named = 'Priya';//it is a global scope though it is declared in a block scope
    let named1 = 'Tina';
}
{
    let named1 = 'Priyam';
    //in a different block can have same variable named and can be declared as let
}
console.log(named);
//console.log(named1);//cannot be accessed as it is declared using let keyword
//This is also a block
if(a==5){

}
//Hoisted means we can define value in a variable before its declaration
//js sees it like below
//var carName
// carName = undefined;//set a default value //then goes to the next line
carName = 'Volvo';//No error
var carName;
console.log(carName); 
//Let has no default value that is why we cannot access it
// let also hoisted but it is not initaialized with default value
//sum = 5;
//let sum;
//console.log(sum);

let p = 3;
p=4;//Value can be reassigned
//const variable must be assigned when they are declared
// const cannot be reassigned
const PI = 3.14;
//PI = 6;//Error
console.log(PI);
