const API_URL= 'https://api.github.com/users/Sourja22';


//using async
async function fetchUrl(){
    try{
        const data= await fetch(API_URL);
        const result= await data.json();
        console.log(result);
    }catch(err){
        console.error(err);
    }
}

fetchUrl();

//using promise

// fetch(API_URL)
//              .then(data=>data.json())
//              .then(res=>console.log(res))
//              .catch(err=>console.log(err));

