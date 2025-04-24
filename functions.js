//In Js functions are treated as values.

xyz();
//  a(); will throw error bcz js doesn't know till the line hit in code exectuion phase that a will be assigned a function.
// c(); same as above

// function statement
function xyz(){
    console.log(10);
}

// function expression/function declaration

var a= function(){
    console.log(100);
}

//Anonymous functions are used in place where functions are used as values.


var b= function (){
    console.log(1000);
}

//named function expression

var c= function nme(){
    console.log(2000);
}

//When we invoke a function using values that is argument
//When the function is actually defined that is called parameters.

// Instance where function is used as values
//First-class functions - where functions can be used as values.

//1---
function val(param){
    param();
}
val(function(){
    console.log(5000);
})

//2---
var z= function ret(){
    console.log(50);
}

function checkParam(param){
    z();
}
checkParam(z);

//NOTE--- First Class Function is basically the feature and Call-back functions are a part of it
 