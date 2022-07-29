const toggle = document.querySelector('.toggle-menu')
const close = document.querySelector('#close')
const menuBar = document.querySelector('.menu-bar')


toggle.addEventListener('click',  () =>{
    console.log('event is working')
    menuBar.classList.add('show')
    menuBar.classList.remove('hide')
})

close.addEventListener('click',  () =>{
    console.log('event is working')
    menuBar.classList.remove('show')
    menuBar.classList.add('hide')
})