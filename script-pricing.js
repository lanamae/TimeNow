const toggle = document.querySelector('.toggle-menu')

const menuBar = document.querySelector('.menu-bar')


const closeMenu = document.querySelector('.closeMenu');

toggle.addEventListener('click',  () =>{
    // console.log('event is working')
    menuBar.classList.add('show')
    menuBar.classList.remove('hide')
})



closeMenu.addEventListener('click', () =>{
    console.log('hello')
    menuBar.classList.remove('show')
    menuBar.classList.add('hide')
})




