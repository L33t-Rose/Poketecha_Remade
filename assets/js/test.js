let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('.form-field');
let g = document.querySelector('.field .col');
let u = document.querySelector('.field');
let d = document.querySelector('.you');
let home = document.querySelector('.home');

g.addEventListener('click', () => {
  u.classList.toggle('collapse');
})

buttons.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    header.classList.toggle('gone');
    section.classList.toggle('gone');
  })
})


home.addEventListener('click',()=>{
  if(header.classList.contains('gone')){
    header.classList.toggle('gone');
    section.classList.toggle('gone');
  };
})

input.addEventListener('focus', () => { error.textContent = ""; })



d.addEventListener('click', () => {
  let u = document.querySelector('#pokemon');
  let m = document.querySelector('#moves');
  u.classList.toggle('disappear');
  m.classList.toggle('disappear');
})

function validate() {
  if (document.querySelector('input.form-field').value) {
    console.log('yes');
    setTimeout(100, getPokeData(input.value));
    input.value = ""
  }
  else {
    setError(errors['onEmpty']);
  }
}