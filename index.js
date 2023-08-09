const readMoreBtn = document.querySelector('.btn-warning');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-More');

    if(readMoreBtn.innerText === 'Read More'){
        readMoreBtn.innerText ='Read Less';
    }else{
        readMoreBtn= 'Read More';
    }
})
