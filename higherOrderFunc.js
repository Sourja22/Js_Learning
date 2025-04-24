// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const rad=[3,1,2,4];
function calculateArea(radius){
    return Math.PI * radius * radius; 
}

function calculatorFunc(param){
    const output=[];
    for(let i=0;i<rad.length;i++){
        output.push(param(rad[i]));
    }
    return output;
}
console.log(calculatorFunc(calculateArea));

//using map as  a high order function
console.log(rad.map(calculateArea));

// Array.prototype -> means the particular component will be available in al the arrays declared

//concept of Array-prototype and poly-fils(Custom way of implementing map in JS)

const rad=[3,1,2,4];
function calculateArea(radius){
    return Math.PI * radius * radius; 
}

Array.prototype.calculatorFunc= function(param){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(param(this[i]));
    }
    return output;
}
console.log(rad.calculatorFunc(calculateArea));

//using map as  a high order function
console.log(rad.map(calculateArea));

// Array.prototype -> means the particular component will be available in al the arrays declared
