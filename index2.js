let switcher = document.getElementById('switcher');
let secBtnRob = document.getElementById('secBtnRob');
let robIntput = document.getElementById('robIntput');

window.onload = function(){
  timeout();
}
setInterval(timeout,6000)

function timeout () {
  setTimeout(() => {
    switcher.classList.toggle("switch-on");
    secBtnRob.classList.toggle("active");
  },500);
  setTimeout(()=>{
    robIntput.setAttribute('value','76');
  },3000);
  setTimeout(()=>{
    secBtnRob.classList.toggle("animationButtons");
  },4000);
  setTimeout(()=>{
    robIntput.removeAttribute('value','76');
  },6000);
}


// function robIntputFun (){
//   robIntput.setAttribute('value','76')
// };