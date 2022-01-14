function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestoy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');





  input.addEventListener('change', (event) => {
    createBoxes(event.currentTarget.value);
  })



function createBoxes(amount) {
  destroyBoxes();
  const array = [];  
  for (let i = 0; i < amount; i+=1) {
    console.log(i);
    const element = `<div style="background-color:${getRandomHexColor()}; width: ${30 + 10 * i}px; height: ${30 + 10 * i}px" ></div>`;
    array.push(element);
  }

  const str = array.join('');
  console.log(str);
  boxes.insertAdjacentHTML("afterbegin", str);
}

btnDestoy.addEventListener('click', ()=>{
  destroyBoxes();
  input.value = 0;
});

function destroyBoxes() {
  boxes.innerHTML = '';
}