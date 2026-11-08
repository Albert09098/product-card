
//3. Создать объект на основании личных данных.

const userProfile = {
  name: "Альберт",
  surname: "Салпагаров",
  email: "albert1992orlik@gmail.com",
  job: "Eviscerator",
  hobby: "is archery",
  age: 34,
  country: "Россия",
  city: "Черкесск"
};

//4. Создать объект, который будет хранить данные об автомобиле.

const car = {
  brand: "Lada Granta",
  model: "Ваз 2190",
  year: 2013,
  color: "металлик",
  transmission: "автомат"
};

//Добавление свойства отдельной строкой, значением которого является объект из пункта №3
car.owner = userProfile;

//5. Написать функцию, которая аргументом принимает объект.

function checkMaxSpeed(obj) {
  if (obj.hasOwnProperty("максимальная скорость")) {
    return;
  }
  obj["максимальная скорость"] = 200;
}

//Пример вызова для проверки:
checkMaxSpeed(car);

//6. Функция вывода свойства объекта по ключу.

function printProperty(obj, propertyName) {
  if (propertyName in obj) {
    console.log(obj[propertyName]);
  } else {
    console.log(`Свойство "${propertyName}" не найдено в объекте.`);
  }
}

//7. Массив названий продуктов.

const products = ["Молоко", "Хлеб", "Сыр", "Яблоки", "Шоколад"];

//8. Массив объектов (исторические луки) + добавление элемента.

const historicalBows = [
  {
    title: "Английский длинный лук (Longbow)",
    origin: "Англия / Уэльс",
    year: 1250,
    woodColor: "Светло-коричневый (тис)",
    type: "Простой прямой лук"
  },
  {
    title: "Монгольский составной лук",
    origin: "Монгольская империя",
    year: 1206,
    woodColor: "Тёмно-бурый (роговые пластины и береста)",
    type: "Рекурсивный композитный лук"
  },
  {
    title: "Византийский лук",
    origin: "Византия",
    year: 600,
    woodColor: "Желтовато-коричневый",
    type: "Композитный лук"
  }
];

// Добавление нового лука в конец списка с помощью метода push

historicalBows.push({
  title: "Японский лук Юми (Yumi)",
  origin: "Япония",
  year: 1185,
  woodColor: "Натуральный бамбук",
  type: "Асимметричный длинный лук"
});

//9. Объединение двух массивов с помощью оператора spread.

const alternativeBows = [
  {
    title: "Турецкий османский лук",
    origin: "Османская империя",
    year: 1453,
    woodColor: "Покрытый лаком с росписью",
    type: "Короткий рекурсивный композит"
  },
  {
    title: "Скифский лук",
    origin: "Причерноморье (Скифия)",
    year: 1300,
    woodColor: "Тёмный (сухожилия и кожа)",
    type: "Малый сигмовидный лук"
  }
];

//Объединяем массивы луков с помощью spread-оператора (...)
const allBows = [...historicalBows, ...alternativeBows];

//10.Функция трансформации массива через map()

function updateBowsCollection(bowsArray) {
  return bowsArray.map(bow => {
    const updatedBows = { ...bow };

    if (updatedBows.year >= 1200) {
      updatedBows.isLateMedieval = true;
    } else {
      updatedBows.isLateMedieval = false;
    }
    return updatedBows;
  });
}

//Пример вызова функции в консоль
const finalBowsCollection = updateBowsCollection(allBows);
console.log("Итоговая коллекция луков:", finalBowsCollection);