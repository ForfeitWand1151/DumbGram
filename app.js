const instaView = document.getElementById("instaView")

function openInstagram(page){
  let url = ""
  if(page==="direct") url="https://www.instagram.com/direct/inbox/"
  if(page==="upload") url="https://www.instagram.com/create/select/"
  if(page==="profile") url="https://www.instagram.com/accounts/edit/"

  instaView.src = url
}

// Script para "burificar" a página dentro do iframe
instaView.onload = function() {
  try {
    const doc = instaView.contentDocument || instaView.contentWindow.document

    // Adiciona botão para voltar à tela inicial do PWA
    let btn = doc.createElement("button")
    btn.innerText = "Voltar ao DumbGram"
    btn.style.position="fixed"
    btn.style.top="10px"
    btn.style.left="10px"
    btn.style.zIndex="9999"
    btn.style.padding="8px 12px"
    btn.style.background="white"
    btn.style.border="1px solid #ccc"
    btn.style.borderRadius="4px"
    btn.onclick = ()=> instaView.src = ""
    doc.body.appendChild(btn)

    // Bloquear Reels, Explore, Stories
    let links = doc.querySelectorAll("a")
    links.forEach(l=>{
      if(l.href.includes("/reels") || l.href.includes("/explore") || l.href.includes("/stories")){
        l.remove()
      }
    })

    // Ocultar feed e barra lateral (se possível)
    let feed = doc.querySelector("main")
    if(feed) feed.style.display="none"

  } catch(e){
    console.log("Não foi possível alterar o iframe (restrição de segurança):", e)
  }
}