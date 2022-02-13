let nums = document.getElementsByClassName('NumberButton');
let generatePin = document.getElementsByClassName('form-control')[0];
let inputPin = document.getElementsByClassName('form-control')[1];

for (element of nums) {
  element.addEventListener('click', function (event) {
    let vlu = event.target.innerText;
    let iniNum = inputPin.value;
    let pressNum = iniNum + vlu;
    if (isNaN(vlu)) {
      if (vlu == 'C') {
        inputPin.value = '';
      }
      if (vlu == '◁') {
        inputPin.value = inputPin.value.slice(0, -1);
      }
    } else {
      inputPin.value = pressNum;
    }
  })
}

// Random number generate
function Random() {
  let digit4 = Math.ceil((Math.random() * 10000) + 1);
  if (digit4.toString().length == 4) {
    generatePin.value = digit4;
  }
  console.log(digit4);
}

// Submission check
let noMatch = document.getElementsByClassName('notify')[0];
let Match = document.getElementsByClassName('notify')[1];
let leftAction = document.getElementById('left-action');

function submit() {
  let actions = leftAction.innerText = +leftAction.innerText - 1;
  if (actions < 0) {
    alert('Too much input!');
  } if (inputPin.value == generatePin.value) {
    Match.style.display = 'block'
    noMatch.style.display = 'none'
  } if (inputPin.value != generatePin.value || inputPin.value == '') {
    noMatch.style.display = 'block'
    Match.style.display = 'none'
  }
}