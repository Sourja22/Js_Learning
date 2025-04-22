//Closure means the inner function has access to all its outer function's components.
//A Function bundled with all its lexical environment
//Function must be defined within another function in-order to get access to its  properties

//A closure happens only when a variable is being accessed from outer environment in function
function outer(){
    var a=10; //doesnot matter if var/let/const is used
    return function inner(){
        console.log(a);
    }

}
outer()();
// the above is same as
// var re=outer();
// re();

