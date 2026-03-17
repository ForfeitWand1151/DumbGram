
function go(url){
const frame = document.getElementById("view")
frame.src = url
}

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('service-worker.js')
}
