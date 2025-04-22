//Basic diff between onclick and eventlist is that onclick can't handke more than one event but evenlist can hand multiple events


var bton= document.getElementById('btn');

bton.addEventListener('click',function(){
    alert('First');
});
bton.addEventListener('click',function(){
    alert('Second');
})


