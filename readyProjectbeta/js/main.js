const item = document.getElementById('item')
const button = document.getElementById('button')
const blocker = document.getElementById('blocker')
const erorr = document.getElementById('error')
const block_wrap = document.getElementById('block_wrap')

const block1 = document.getElementById('block_wrapper1')
const block2 = document.getElementById('block_wrapper2')
const block2_1 = document.getElementById('block_wrapper2_1')
const block2_2 = document.getElementById('block_wrapper2_2')
const block3 = document.getElementById('block_wrapper3')
const block3_1 = document.getElementById('block_wrapper3_1')
const block3_2 = document.getElementById('block_wrapper3_2')


const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')
const button4 = document.getElementById('button4')
const button5 = document.getElementById('button5')
const button6 = document.getElementById('button6')


function btnOnclick (){
  item.classList.toggle('item_active')
  blocker.classList.toggle('notActive')
  button.classList.toggle('active')
}
function btnOnclickErorr (){
  erorr.classList.add('erorr_active');
  setTimeout(()=>{
    erorr.classList.remove('erorr_active');
  },3000)
}
function closeBnt(){
  block_wrap.classList.add('closeBlock')
}

function onClickbutton1() {
  block1.classList.add('block_none')
  block2.classList.remove('block_none')
  setTimeout(()=>{
    interval();
  },1000)
  setInterval(() => {
    interval();
  }, 4000);
}
function onClickbutton2() {
  button1.classList.add('block_none')
  button2.classList.remove('block_none')
}
function onClickbutton3() {
  button2.classList.add('block_none')
  button3.classList.remove('block_none')
}
function onClickbutton4() {
  block2.classList.add('block_none')
  block3.classList.remove('block_none')
  timeout()
  setInterval(timeout,7500)
}
function onClickbutton5() {
  button4.classList.add('block_none')
  button5.classList.remove('block_none')
  timeout()
  setInterval(timeout,7500)
}
function onClickbutton6() {
  button5.classList.add('block_none')
  button6.classList.remove('block_none')
  timeout()
  setInterval(timeout,7500)
}


// app.js
let lableBtn = document.getElementById('lableBtn');
let secBtn = document.getElementById('secBtn');
let placehold1 = document.getElementById('placehold1');
let placehold2 = document.getElementById('placehold2');

function pulseBtn(){
  lableBtn.classList.toggle("animation_lable");
};
function addValue(){
  placehold1.classList.toggle('placegolder-notActive');
  placehold2.classList.toggle('place_notActive');
};
function pulseSecBtn(){
  secBtn.classList.toggle("animationButtons");
};

function interval(){
  setTimeout(pulseBtn,0);
  setTimeout(addValue,1000);
  setTimeout(pulseSecBtn,2500);
};




// app3.js
let switcher = document.getElementById('switcher');
let secBtnRob = document.getElementById('secBtnRob');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let placehold3 = document.getElementById('placehold3');
let placehold4 = document.getElementById('placehold4');


function timeout () {
  setTimeout(() => {
    switcher.classList.toggle("switch-on");
  },500);
  setTimeout(()=>{
    span1.classList.toggle('notActive-span');
    span2.classList.toggle('active-span');
    placehold3.classList.toggle('placegolder-notActive');
    placehold4.classList.toggle('place_notActive');
  },2500);
  setTimeout(()=>{
    secBtnRob.classList.toggle("active2");
  },2500);
  setTimeout(()=>{
    secBtnRob.classList.toggle("animationButtons");
  },4500);
}
