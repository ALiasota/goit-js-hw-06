const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




const makeLi = names => {
  return names.map(name => {
    const item = document.createElement('li');    
    item.classList.add('item');
    item.textContent = name;  
    return item;
  });
};

const items = makeLi(ingredients);
const list = document.querySelector("#ingredients");


 list.append(...items);