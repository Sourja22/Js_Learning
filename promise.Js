// const promise=  a Promise is an object that represents the eventual completion or failure of an async operation



function b(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('hi');
            resolve('done');
        },5000);
        
    })
}

function c(){
     return new Promise((resolve,reject)=>{
         console.log('c');
        resolve('done');
    })
}

function d(){
     return new Promise((resolve,reject)=>{
         console.log('d');
        reject('not done');
    })
}

b()
  .then(()=>c())
  .then(()=>d())
  .catch(err=>{
      console.log(err)
   });
   
 //catch will handle all the errors occuring in the top 'then' . But the then below it will get executed.
 
 

 //Passing value deep into the promise chain
 function prom(){
    return new Promise((resolve,reject)=>{
        console.log('hi');
        resolve(101);
    })
}

function b(res){
    console.log(res+' into b');
}

 prom()
    .then((res)=>{
        return res;
    })
    .then((res)=> b(res)); // or .then(b)
