


const btn_cv = document.getElementById('btnCvPreview')
const closebtn = document.getElementById('closebtn')

btn_cv.addEventListener('click', (e) => {
    document.getElementById('cvBx').classList.remove('cvBxHide')
    location.href = '#cvBx'
    e.preventDefault()
    e.stopPropagation()
})

closebtn.addEventListener('click', (e) => {
    document.getElementById('cvBx').classList.add('cvBxHide')
    location.href = '#home_section'
    e.preventDefault()
    e.stopPropagation()
})


document.getElementById('btn_cv').addEventListener('click', () => {
    var element = document.getElementById('cvpdf');
    var mywindow = window.open("", "PRINT", "height=600,width=600");
    mywindow.document.write(element.innerHTML);
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    return true;
})
