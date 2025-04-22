function a(){
    for(var i=1;i<=5;i++){
        function close(i){
             setTimeout(function(){
            console.log(i);
            },i*1000);
        }
        close(i);
    }
}
a();
// this will print 1,2,3,4,5,6(Because of closure and exectuion context)

function a(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
a();
//this will print the same(sinc let is block scoped,each time the block executes a new memory is allocated)


function a(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
a();

//this will print 6,6,6,6,6(since var is function scoped, the memory allotment is once only and by the time console.log happens the value is set to 6)