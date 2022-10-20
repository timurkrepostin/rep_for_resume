
// Стрелочные функции
// Стрелочная функция присваивается в переменную const
// Синтаксис и объявление:
// Можно объявлять функцию с аргументами, если одно действие то фигурные скобки опускаем и делаем без ретерна
// Если действие больше, чем одно, то как в обычной функции открываем фигурные скобки и делаем логику
const plus = (x, y) => x + y; 
const Res = plus(1, 2);
console.log(Res)

// Если нет аргументов
const withoutArgs = () => console.log('hello world');
// Если только один аргумент
const singleArg = (x = 2) => x * 2; 

// Если действие больше, чем одно и несколько аргументов
const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    return a + b;
};
const ab = moreActions(2, 2);
console.log(ab);

// Возвращение при помощи стрелочной функции объекта
const returnObj = (str = '') => {
    return {
        value: str,
        length: str.length,
    };
};
const rO = returnObj('hello world');
console.log(rO);
