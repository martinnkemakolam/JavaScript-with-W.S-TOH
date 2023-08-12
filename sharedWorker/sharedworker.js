let pages = []
onconnect=evt=>{
    let port = evt.ports[0]
    pages.push(port)
    pages.forEach((ports)=>{
        ports.onmessage=(e)=>{
            port.postMessage(pages.length)
        }
    })
}
