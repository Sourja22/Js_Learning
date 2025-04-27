//Using map and invoking function explicitly

const arr=[1,2,3,4];
function double(x){
    return x*2;
    
}
console.log(arr.map(double));


//Using map and function directly in it
const res= arr.map(function(x){
     return x*2;
})

console.log(res);

//filter
function myFunc(x){
    return x>1;
}

const arr=[1,2,2];
const arrRest= arr.filter(myFunc);
console.log(arrRest);
 
//using arrow function

const arr=[1,2,2];
const arrRest= arr.filter( (x)=> x>1);
console.log(arrRest);
 
//Reduce
//Mainly used to find an accumulated value of an array.
//Firt param-> the accumulated result and the current element of the array
//Second param-> the value with which the accumulator should be initialized.

const arr=[1,2,3,4,5];
 const res=arr.reduce(function(acc,curr){
     if(curr>acc){
         acc= curr;
     }
     return curr;
 },arr[0])
 console.log(res);


 const users =[
    {firstName: "Sourja", lastName: "Dhar" , age: 26},
    {firstName: "Deepika", lastName: "padukone" , age: 26},
    {firstName: "Lionel", lastName: "Messi" , age: 30},
    {firstName: "Cris", lastName: "Sen" , age: 45}
];
const firstList= users.reduce(function(acc,curr){
    if(curr.age===26){
        acc.push(curr.firstName);
    }
    return acc;
    
},[]);
console.log(firstList);

