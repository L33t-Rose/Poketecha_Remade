let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('.form-field');



let g = document.querySelector('.field .col');
let u = document.querySelector('.field');
g.addEventListener('click',()=>{
  u.classList.toggle('collapse');
})

buttons.forEach((btn)=>{
  btn.addEventListener('click',function(e){
    e.preventDefault();
    header.classList.toggle('gone');
    section.classList.toggle('gone');
  })
})


input.addEventListener('focus',()=>{error.textContent = "";})

function validate(){
  if(document.querySelector('input.form-field').value){
    console.log('yes');
    setTimeout(100,getPokeData(input.value));
    // u.classList.toggle('collapse');
    input.value=""
  }
  else{
    setError(errors['onEmpty']);
  }
}