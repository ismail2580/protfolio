let menu = document.querySelector('#menu')
let navBar = document.querySelector('.navBar')
let scrollBar = document.querySelector('.scrollBar') 
menu.addEventListener('click',()=>{
  menu.classList.toggle('fa-times')
  navBar.classList.toggle('nav-toggle')
})

window.onscroll = ()=>{
  menu.classList.remove('fa-times')
  navBar.classList.remove('nav-toggle')
  scrollIndicator()
}

function scrollIndicator(){
  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight)* 100
  scrollBar.style.width = percentage += '%'
}
