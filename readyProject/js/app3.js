let switcher = document.getElementById('switcher');
let secBtnRob = document.getElementById('secBtnRob');
let robIntput = document.getElementById('robIntput');

window.onload = function(){
  timeout();
}
setInterval(timeout,7500)

function timeout () {
  setTimeout(() => {
    switcher.classList.toggle("switch-on");
  },500);
  setTimeout(()=>{
    robIntput.setAttribute('value','76');
  },2500);
  setTimeout(()=>{
    secBtnRob.classList.toggle("active");
  },2500);
  setTimeout(()=>{
    secBtnRob.classList.toggle("animationButtons");
  },4500);
  setTimeout(()=>{
    robIntput.removeAttribute('value','76');
  },6500);
}

