
// Строки

const firstName = 'Denis';
const lastName = 'Petrov';
const age = 30;
const str = 'Hello my name is Denis';
let value;

// 1.
value = firstName + lastName; // сращивается без пробела
value = firstName + ' ' + lastName; // пробел
value = value + ' I am ' + age;
value += ' I am ' + age; // как запись выше, только короче

// 2. У строки есть свойство возвращение длины строки .leight
value = firstName.length // пять букв в имени
value = firstName[2]; // буква н, потому что JS считает с нуля

// Cвойства и методы присущи объектам. Методы - записанные функции в свойства объекта, а свойства - ключ-значение

// 3. Как получить последний элемент строки
value = lastName[lastName.length - 1];

// 4. Методы для работы со строками. Строка 
value = firstName.toUpperCase(); // перевод слова в верхний регистр
value = firstName.concat(' ', lastName); // принимает строки, которые хотим конкакинировать
value = firstName.indexOf('n'); // который принимает подстроку, и показывает на каком индексе встречается. Работает по символу и слову
value = str.includes('my'); // дает булевое значение, есть ли в этой строке какой-либо символ/слово
value = str.slice(0, 5); // метод принимает стартовый индекс, с которого хотим вырезать и конечный индекс. Выдаст hello
value = str.slice(5); // в данном случае просто вырежет из строки hello
value = str.replace('Denis', 'Den'); // Замена строки. указываем значение, которое будем заменять, через запятую указываем на что
console.log(value);
