//getElementById- Always returns single element

// var ele= document.getElementById('para-id');
// console.log(ele);


//getElementsByClassName- Always returns  an array

// var ele= document.getElementsByClassName('para');
// console.log(ele[1].textContent);

//querySelectorAll- Always returns  an array
//querySelector- Returns single element

// var ele= document.querySelectorAll('.para');
// console.log(ele[1].textContent);


//appending child to my div from JS
var ele= document.getElementById('para-id');
var para= document.createElement('p');
para.innerHTML= 'I created you on my Work anniversary';
ele.appendChild(para);

//removing the child by refering to parent
// ele.removeChild(para);


// removing the child directly.
// para.remove();