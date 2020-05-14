const errors ={
    onEmpty:"Cannot be empty",
    onNoExist : "Pokemon Does Not Exist",
}


let header = document.querySelector('header');
let section = document.querySelector('section');

const failedEvent = new Event('fail');
const showEvent = new Event('show');
const reqFinished = new Event('finished');

let error = document.querySelector('small.error');

function setError(err){
    console.log('now',err)
    error.textContent = err;
    error.classList.toggle('error-gone');  
}

window.addEventListener('show',()=>{
    if(section.classList.contains('gone')){
        header.classList.toggle('gone');
        section.classList.toggle('gone');
    }
})

window.addEventListener('fail',()=>{setError(errors['onNoExist'])});

window.addEventListener('finished',()=>{u.classList.toggle('collapse')});

// export default errors;