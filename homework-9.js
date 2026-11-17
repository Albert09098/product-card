import { socialComments } from './comments.js';

//2. Фильтрация массива чисел. Для получения элементов, начиная с 5,используем метод Filter().
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter((num) => num >= 5);
console.log(filteredNumbers); // [5, 6, 7, 8, 9, 10]


//3. Проверка наличия элемента в массиве строк. Для проверки наличия определённого значения в массиве используем метод includes().
const books = ['Дюна', '1984', 'Мастер и Маргарита', 'Гарри Потер'];
const hasBook = books.includes('1984');
console.log(hasBook);


//4. Функция для переворота массива и её вызов для двух массивов
function reverseArray(arr) {
  return [...arr].reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(books));

//5 & 6. Создание и экспорт массива комментариев в comments.js


//7. Фильтрация комментариев по почте(.com)
const comComments = socialComments.filter((comment) => comment.email.includes('.com'));
console.log(comComments);


//8. Изменения postId в зависимости от id
const updatedPostIds = socialComments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(updatedPostIds);


//9. Массив объектов только из id и name
const shortComments = socialComments.map((comment) => ({
  id: comment.id,
  name: comment.name
}));
console.log(shortComments);


//10. Добавление свойства isInvalid
const validatedCommets = socialComments.map((comment) => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(validatedCommets);


//11.1 Получение массива почты через reduce и map
const emailsWithReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsWithReduce);


//11.2 Через map():просто возвращаем свойство email для каждого элемента.
const emailsWithMap = socialComments.map((comment) => comment.email);
console.log(emailsWithMap);


//12.1 Приведение массива почты к строке. Через toString(): объединяет элементы через запятую без пробелов.
const emailsString = emailsWithMap.toString();
console.log(emailsString);


//12.2 Через join():позволяет указать любой разделитель(например,запятую с пробелом).
const emailsJoined = emailsWithMap.join(', ');
console.log(emailsJoined);