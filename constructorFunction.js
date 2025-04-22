function Outer(){
    var a=10; //doesnot matter if var/let/const is used

    this.inner= function(){
        console.log(a);
    }

}
var ret= new Outer();
ret.inner();