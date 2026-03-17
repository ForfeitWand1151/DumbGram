function direct(){
window.location.href="https://www.instagram.com/direct/inbox/"
}

function upload(){
window.location.href="https://www.instagram.com/create/select/"
}

function profile(){
window.location.href="https://www.instagram.com/accounts/edit/"
}

/* bloqueio de links viciantes */

document.addEventListener("click", function(e){

let link = e.target.closest("a")

if(!link) return

let href = link.href

if(
href.includes("/reels") ||
href.includes("/explore") ||
href.includes("/stories")
){

e.preventDefault()

alert("Bloqueado pelo DumbGram")

}

})