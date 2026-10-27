function showTemperature(city, temperature) {
  console.log(`Сейчас в городе ${city} температура - ${temperature} градусов по Цельсию`);
}
showTemperature("Дружба", 8);

const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(500000000);
checkSpeed(100);
checkSpeed(299792458);

const productName = "Традиционный лук";
const productPrice = 15000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку`);
  } else {
    const missingAmout = productPrice - budget;
    console.log(`Вам не хватает ${missingAmout}$, пополните баланс`);
  }
}

buyProduct(20000);
buyProduct(10000);

function calculateRectangLeArea(width, height) {
  return width * height;

}

let userAge = 26;
let userName = "Альберт";
let isStudent = true;