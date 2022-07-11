const btnBar=document.getElementById('burguer')
const menuLateral=document.getElementById('menuLateral')
const btnSection=document.getElementById('menuLateral')

btnBar.addEventListener('click',()=>{
    menuLateral.classList.toggle('menuShow')
    console.log('menu')
})


btnSection.addEventListener('click',()=>{
    menuLateral.classList.remove('menuShow')
    console.log('click en menu')
})

