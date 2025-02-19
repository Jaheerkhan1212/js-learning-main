# projects
## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-bygkal6z?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solutions

## project1 
```javascript
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    document.body.style.backgroundColor = event.target.id;
    // document.body.style.backgroundColor=button.id;
  });
});
```
## project2
```javascript
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');
  if (height && weight) {
    const temp = (weight * 1000) / height;
    res.innerHTML = `BMI is ${temp}`;
  } else {
    res.innerHTML = 'fill details';
  }
});

```

## project 3
```javascript
const today = new Date();
document.querySelector('#clock').innerHTML = today.toLocaleTimeString();
setInterval(function () {
  document.querySelector('#clock').innerHTML = today.toLocaleTimeString();
}, 1);
```

## project 4
```javascript
// const form=document.querySelector('form');
// const expected=45;
// form.addEventListener('submit',(event)=>{
//   event.preventDefault();
//   const guess=parseInt(document.querySelector('#guessField').value);
//   if(guess==expected){
//     document.querySelector('.lowOrHi').innerHTML="you guessed it right";
//   }
//   else{
//   const gp=document.querySelector('.guesses');
//   const prev=gp.innerHTML;
//   gp.innerHTML=`${prev} ${guess}`;
//    let guessres=parseInt(document.querySelector('.lastResult').innerHTML);
//     guessres=guessres-1;
//     document.querySelector('.lastResult').innerHTML=`${guessres}`;

//   }

// });
const form = document.querySelector('form');
const guessslot = document.querySelector('.guesses');
const ipt = document.querySelector('#guessField');
const numguess = document.querySelector('.lastResult');
let num = 1;
const loworhi = document.querySelector('.lowOrHi');
const respara = document.querySelector('.resultParas');
const p = document.createElement('p');
let random = Math.round(Math.random() * 100 + 1);
let playgame = true;
let prev = [];
if (playgame) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let guessval = parseInt(ipt.value);
    validateguess(guessval);
  });
}
function validateguess(guessv) {
  if (isNaN(guessv) || guessv > 100 || guessv < 1) {
    alert('enter a valid number');
  } else {
    prev.push(guessv);
    if (num == 5) {
      displaymessage(`game over and number was ${random}`);
      endgame();
    }
    displayguess(guessv);
    checkguess(guessv);
  }
}

function checkguess(g) {
  if (g == random) {
    displaymessage(` guess ${g} is correct`);
  }
}

function displaymessage(message) {
  loworhi.innerHTML = message;
}
function displayguess(g) {
  guessslot.innerHTML += ` ${g}`;
  num++;
  numguess.innerHTML = `${11 - num}`;
}
function endgame() {
  ipt.setAttribute('disabled', '');
  playgame = false;
  p.classList.add('button');
  p.innerHTML = 'start new game';
  respara.appendChild(p);
  newgame();
}

function newgame() {
  p.addEventListener('click', (event) => {
    loworhi.innerHTML = '';
    guessslot.innerHTML = '';
    num = 1;
    prev = [];
    ipt.removeAttribute('disabled');
    respara.removeChild(p);
    random = Math.round(Math.random() * 100 + 1);
    playgame = true;
  });
}

```
## project 5
```javascript
console.log('Project 5');
const insert=document.querySelector('#insert');
window.addEventListener('keydown',(e)=>{
  console.log(`key is ${e.key}`);
  console.log(`keycode is ${e.keyCode}`);
  console.log(`keycode is ${e.code}`);
});
```

## project 6
```javascript
const body = document.body;
let id;
document.querySelector('#start').addEventListener('click', (e) => {
  if (!id) {
    id = setInterval(colorchange, 1000);
  }
});
document.querySelector('#stop').addEventListener('click', (e) => {
  clearInterval(id);
  id = null;
  console.log('stopped');
});
const colorchange = function () {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  console.log('hello');
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
};

```

