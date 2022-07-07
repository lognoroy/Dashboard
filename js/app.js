const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
modalBtn.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click',function(){
    modalBg.classList.remove('bg-active');
});
modalBg.addEventListener('click', function(e){
    if(e.target !== this) return;
    modalBg.classList.remove('bg-active');
});
document.addEventListener('keydown', function(e){
    if(e.key === 'Escape')
    {
        modalBg.classList.remove('bg-active');

    }
});
