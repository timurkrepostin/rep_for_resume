
// Преобразование типов
// 1. string. String - функция, которая принимает в себя значение и преобразовывает его к строке

// 1.1 Number to String 
let value;
value = String(10);
value = String(10 + 40);
value = (40).toString(); // преобразование через метод toString
// console.log(value); значение остается прежним
// console.log(typeof value); тип данных перешел в String

// 1.2 Boolean to String
value = String(false);

// 1.3 Array(массив) to String
value = String([1, 2, 3]);

// 1.4 Object to String
value = String({name: 'Denis'});

// 1.5 преобразование в строку может происходить при попытке конкатенации
value = 30 + ' '; // когда мы СКЛАДЫВАЕМ со строкой, получаем строку - конкатенация
value = 30 + ' ' + 30;
value = 30 - '5'; // во всех других арифметических операциях, строка будет пытаться преобразовываться к числу

// 1.6 null преобразовывается к 0, false к 0, true к 1, undefined к NaN

// 2 Number. Number - функция, которая принимает в себя значение и преобразовывает его к числу

// 2.1 String to Number
value = Number('23'); // 23
value = Number(false); // 0, true 1
value = Number(null); // 0
value = Number('false'); // NaN
value = Number([1,2,3]); // NaN

// 2.2 Специальные функции, приводящие к числу - parsInt (целые числа), parsFloat (дробные)
value = parseInt('200');
value = parseInt('200asda'); // если после числа какие-то символы, то выделит число
value = parseFloat('200.21');

// 3. Boolean
// 3.1 String to Boolean
value = Boolean('hello') // любая содержащая в себе символы(даже пробел) строка преобразовывается в true
value = Boolean('') // пустая строка в false

// 3.2 Number to Boolean. Любое число, даже отрицательное, преобразовывается в true. пустой массив и пустой объект - true
// 0, NaN, undefined - false
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);
value = Boolean({});
value = Boolean([]);

console.log(value);
console.log(typeof value);
