
// Базовые методы массивов

const numArr = [2, 32, 1234, 54, 323];
let value;
value = numArr.length // у массивов, как и устрок, есть длина

value = Array.isArray(numArr); // проверка является ли массив массивов
value = numArr[2]; // получить элемент массива можно получить по индексу
numArr[2] = 12; // перезначение переменной массива
value = numArr.indexOf(32) // Метод indexOf

// Методы, которые могут менять массив
// Push добавляет с конца, Pop удаляет с конца
value = numArr.push(100, 200); // меняет массив
value = numArr.pop(); // меняет массив
value = numArr.unshift(111, 210); // добавляет в начале
value = numArr.shift(); // удаляет с начала
value = numArr.slice(0, 2); // возвращает ту часть массива, которую вырезал, после показывает основной массив
value = numArr.splice(1, 2, 'one', 'two'); // удаляет часть массива, на место удаленного можно добавить свое
value = numArr.reverse(); // изменяет исходный массив, пускает значения наоборот
value = numArr.concat(1, 2, 3); // позволяет конкакенировать
value = numArr.join(); // делает из массива строку, принимая разделитель
value = 'hello world'.split(); // делает из строки массив, манипуляция с ""
console.log(value, numArr); 
