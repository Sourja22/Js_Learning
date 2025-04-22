//getElementById- Always returns single element

// var ele= document.getElementById('para-id');
// console.log(ele);


//getElementsByClassName- Always returns  an array

// var ele= document.getElementsByClassName('para');
// console.log(ele[1].textContent);

//querySelectorAll- Always returns  an array
//querySelector- Returns single element

var ele= document.querySelectorAll('.para');
console.log(ele[1].textContent);
