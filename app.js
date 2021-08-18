addEventListener("DOMContentLoaded", (e)=>{

    let from = document.getElementById("myForm");
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('./sw.js');
    }
    from.addEventListener('submit', (e)=>{
        let input = Array.from(from);
        input.map(input=>{
            if(input.type !="submit"){
                navigator.serviceWorker.ready.then((res)=>{
                    res.active.postMessage({id: input.value});
                })
            }
           
        })
        e.preventDefault();
    })
    navigator.serviceWorker.addEventListener("message", (e)=>{
        console.log(e.data);
    })
})