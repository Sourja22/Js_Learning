// JS has only one Call-Stack; so if a function is quite heavy and takes time it will affect the performance. So it is always suggested to use async operations for funcs that takes time. So that other func will execute parrallely while that heavy func executes;


// We want to free-up event-listeners as they are very heavy on the memory bcz they don't get removed right as anytime they can be called.

function eventListenerActions(){
    let count=0;

    document.getElementById('btn').addEventListener('click',function eventAction(){
        count++;
        console.log(`button clicked ${count}`);
    });

}
    // let count=0;


eventListenerActions();