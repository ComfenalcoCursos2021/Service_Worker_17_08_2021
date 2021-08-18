importScripts('./Clientes/main.js');

self.addEventListener("install",(e)=>{
    console.log("Intalacion del servis worker completa...");
})

self.addEventListener('activate', (e)=>{
    console.log("El servi worker esta activo");
})

self.addEventListener('fetch', (e)=>{
    fetch(e.request.url).then(res=>{
        return res.text();
    })
    .then(res=>{
        console.log(res);
    })
})
self.addEventListener('message',(e)=>{
    e.source.postMessage({id:"hola"})
})