const myButton = document.getElementById('change-button');
const input = document.getElementById('user-input');
const myName = document.getElementById('name');
const ChangeBackgroundGreen = document.getElementById('change-green');
const ChangeBackgroundBlue = document.getElementById('change-blue');
const ChangeBackgroundYellow = document.getElementById('change-yellow');

myButton.addEventListener('click', () => {
  if(input.value === ''){
     myName.textContent = 'Minh';}
     else{
        myName.textContent = input.value;
     }
  });

ChangeBackgroundGreen.addEventListener('click', () => {
      document.body.style.backgroundColor = 'green';
  })

ChangeBackgroundBlue.addEventListener('click', () => {
   document.body.style.backgroundColor = 'blue';
})

ChangeBackgroundYellow.addEventListener('click', () => {
   document.body.style.backgroundColor = 'yellow';
})