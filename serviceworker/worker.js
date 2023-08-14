self.addEventListener( 'install',()=>{
    console.log('install')
    self.skipWaiting(
        console.log('skipped')
    )
})
onactivate=()=>{
    console.log('active')
    self.clients.claim(
        console.log('any')
    )
}
onpush=()=>{
    console.log('push')
}
onfetch=()=>{
    console.log('fetch')
}
onsync=(ev)=>{
    if (ev.tag == "demo") {
    console.log('sync')   
    }
}
let arr = []
onmessage=(e)=>{
    arr.push(e.data)
    self.clients.matchAll().then(all=>{
        all.forEach(client => {
            client.postMessage(arr.length)
        });
    })
}