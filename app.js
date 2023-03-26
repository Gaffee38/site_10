
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
let lableBtn = document.getElementById('lableBtn');
let secBtn = document.getElementById('secBtn');
let inputText = document.getElementById('inputText');
function pulseBtn(){
  lableBtn.classList.toggle("animation_lable");
};
function addValue(){
  inputText.setAttribute('value','NamePicture');
  const attr = inputText.getAttribute('value');
  if (attr == 'NamePicture'){
    setTimeout(function() {
      inputText.removeAttribute('value','NamePicture');
    },5000)
  }
};
function pulseSecBtn(){
  secBtn.classList.toggle("animationButtons");
};



function interval(){
  setTimeout(pulseBtn,0);
  setTimeout(addValue,3000);
  setTimeout(pulseSecBtn,6000);
};
setInterval(interval,8500);

  


// delay = 6500;
// setInterval(function(){
//   setTimeout(function(){
//     console.log('pr1')
//   },200);
//   setTimeout(function(){
//     console.log('pr2')
//   },3200);
//   setTimeout(function(){
//     console.log('pr3')
//   },6200);
// },delay)

