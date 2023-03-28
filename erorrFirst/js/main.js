const item = document.getElementById('item')
const button = document.getElementById('button')
const blocker = document.getElementById('blocker')
const erorr = document.getElementById('error')


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