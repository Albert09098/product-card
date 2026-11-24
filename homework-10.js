import { products } from "./products.js";
const productsDescriptionList = products.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);
console.log(productsDescriptionList);

function getCardsCount() {
  const input = prompt('Сколько карточек отобразить? От 1 до 5');

  if (input === null || input.trim() === '') {
    alert('Вы не ввели число. Будут отображены все 5 карточек.');
    return products.length;
  }

  const count = Number(input);

  if (Number.isNaN(count) || !Number.isInteger(count) || count < 1 || count > 5) {
    alert('Некорректное значение! Введите целое число от 1 до 5. Показаны все 5 карточек.');
    return products.length;
  }

  return count;
}


function renderCards(cardsArray) {
  const productsList = document.querySelector('.village__products-list');
  const cardTemplate = document.querySelector('#product-card-template');
  productsList.innerHTML = '';

  cardsArray.forEach((product) => {
    const cardClone = cardTemplate.content.cloneNode(true);

    const img = cardClone.querySelector('.product-card__image');
    img.src = product.image;
    img.alt = product.alt;

    cardClone.querySelector('.product-card__category').textContent = product.category;
    cardClone.querySelector('.product-card__title').textContent = product.title;
    cardClone.querySelector('.product-card__description').textContent = product.description;

    const ingredientsList = cardClone.querySelector('.product-card__ingredients-list');
    product.ingredients.forEach((ingredientText) => {
      const li = document.createElement('li');
      li.className = 'product-card__ingredient';
      li.textContent = ingredientText;
      ingredientsList.append(li);
    });

    cardClone.querySelector('.product-card__price-value').innerHTML = `${product.price} &#8381;`;

    productsList.append(cardClone);
  });
}

const countToShow = getCardsCount();
const cardsToRender = products.slice(0, countToShow);
renderCards(cardsToRender);
