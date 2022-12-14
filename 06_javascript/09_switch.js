
// Тернарный оператор и конструкция switchcase

// 1. Тернарные операторы - условный оператор, позволяющий совершить действие в зависимости от условия или выражение
// Чаще всего используется для присвоения чего-то к переменной в зависимости от условия

/** Синтаксис: выражение ? если true : если false;
 * Выражение/Условие, которое в результате будет преобразовано к true/false
 * ? - сам оператор, после которого идет действие, если выражение true
 * : - определяет действие, если false
 */

// Простое условие в стандартном виде
let a = 1;
let b = 0;
if (a > 0) {
    b = a;
} else {
    b += 1; // к б будем прибавлять 1
}

// Условие с использованием тернарного оператора
a > 0 ? b = a : b += 1; // логичное применение
let c = a > 0 ? b = a : b += 1; // тернарный оператор возвращает результат того, что было выбрано, поэтому лучше написать
b = a > 0 ? a : b + 1; // обычно терн. оп. используют в таких целях, иначе в сложных конструкциях его сложно читать

// Конструкция типа else if: выражение ? если true : выражение ? если true : если false;
b = a > 0 ? 2 : a < 0 ? 3 : 0; // сложно-читабельно
console.log(b);

// 2. Switchcase - конструкция, помогающая сделать выбор какого-то действия в зависимости от значения какой-то переменной
// Синтаксис
/**
 * Ключевое слово switch(переменная)
 * В фигурных скобках пишутся кейсы - это те значения, которые мы предполагаем, что им равна переменная
 * В конце каждого кейса пишется break, тем самым прерывая работу кейса
 * Так же есть дефолтный кейс, который пишется последним, если нет четких значений
 */
let color = 'red'
switch(color) {
 case 'yellow': 
  console.log('color is yellow');
  break;
 case 'red':
  console.log('color is red');
  break;
 default:
  console.log('Default');
}
