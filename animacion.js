ScrollReveal({ reset: true });
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

ScrollReveal().reveal('.headline',{
    delay:300,
    duration:1000,
    easing: 'ease-out',
    // distance: '100%',
    opacity: 0,
    origin:'right',
    interval:300,
});

ScrollReveal().reveal('#revelImg-1',{
    delay:100,
    duration:500,
    easing: 'ease-out',
    distance: '100%',
    opacity: 0,
    origin:'bottom',
    interval:100,
});
ScrollReveal().reveal('#revelImg-2',{
    delay:100,
    duration:400,
    easing: 'ease-in-out',
    distance: '100%',
    opacity: 0,
    origin:'top',
    interval:200,
});
ScrollReveal().reveal('#revelImg-3',{
    delay:400,
    duration:500,
    easing: 'ease-out',
    distance: '100%',
    opacity: 0,
    origin:'bottom',
    interval:300,
});


ScrollReveal().reveal('.revelImg1',{
    delay:100,
    duration:500,
    easing: 'ease-in-out',
    // distance: '50%',
    opacity: 0,
    // origin:'bottom',
    interval:200,
});