
// Функции высшего порядка

// В JS функции расцениваются как объекты
// Функции могут быть переданы в качестве параметров в другии функции, могут быть пресвоены переменные
// Поэтому функции в JS называются функциями первого класса

// Пример, как не рекомендуется дополнять объект функции

function foo() {
    // console.log('Hello word');
}
foo();
foo.field = 'Denis';
// console.log(foo.field); // таким образом доказываем, что функция объект, который можно дополнить

// Функции высшего порядка - это функции, которые принимают в качестве параметров другие функции или возвращают другие функции 

// Аналог метода map для массивов.
// Map - возвращает новый массив, состоящий из результатов вызов функции callback 

// Задача: получить новый массив, дающий на выходе количество символов каждого элемента

const arr = ['Denis', 'Ivan', 'Maks', 'Olga']; 
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
}
// console.log(newArr);

// Плюс сделать вывод всего массива в верхнем регистре

let newArr2 = [];
for (let i = 0; i < arr.length; i++) {
    newArr2.push(arr[i].toUpperCase());
}
// console.log(newArr2);

// Если объединить это в функцию, то придется постоянно дублировать код, что плохо для качественного кода

// Функция высшего порядка, принимающие в виде параметра другие функции, решающая проблему примера выше

const names = ['Denis', 'Ivan', 'Maks', 'Olga']; 

function mapArray(arr, fn) { // функция будет принимать два параметра - массив arr и функцию fn
    const res = [] // внутри себя она будет создавать новый массивый res 
    for (let i = 0; i < arr.length; i++) { // 1
        res.push(fn(arr[i])); // 2
    } 
    return res; // 3
}
// 1. далее она будет проходиться по этому переданному массиву, 
// 2. но на каждой итерации будет пушить в результирующий массив res результат вызова переданной функции fn, а в переданной функции 
// мы будем передавать один элемент массива
// 3. Возвращать будем результирующий массивы

// Далее от зависимости от поставленной задачи (как преобразовывать массив), можно передавать функцию, которая будет принимать один 
// элемент массива, что-то с ним делать и возвращать результат

function nameLenght(el) {
    // console.log(el);
    return el.length;
}

function nameToUpperCase(el) {
    return el.toUpperCase();
}

const result = mapArray(names, nameLenght);
const result2 = mapArray(names, nameToUpperCase);
// console.log(result, result2)

console.log('=======')

// Функции, возвращающие другие функции

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    };
}

const testGreeting = greeting('Timur'); 
const fullName = testGreeting('Krepostin');
const fullName2 = greeting('Timur')('Krepostin');
// console.log(fullName);
// console.log(fullName2);


function question(job) { // функция принимает тип job 
    if (job === 'developer') { 
        return function(name) { // после проверки в зависимости от типа возвращает другую функцию с вопросом, которой необходимо передать имя 
            return `${name}, что такое JS?`;
        };
    } else if (job === 'teacher') {
        return function(name) {
            return `${name}, что такое PastPerfect?`;
        };
    }
}

const devQn = question('developer'); // вызвали функцию функцию question
const teachQn = question('teacher');
// console.log(devQn('Timur')); // вызвали вторую функцию, которой передали имя
// console.log(teachQn('Timur'));

console.log('=======')

// Если возникает множество условий, то можно сделать из логической связи словарь, упростив конструцию

function question2(job) { // это будет объект, где ключем будет название работы, а значением вопрос 
    const jobDictinary = {
        developer: 'что такое js',
        teacher: 'что такое pastperfect'
    };
    return function(name) { // функция, которая будет принимать имя
        return `${name}, ${jobDictinary[job]}?`; // а вместо вопроса, будет подставлять из словаря тип профессии
    };
}
const devQn2 = question2('developer'); // вызвали функцию функцию question
const teachQn2 = question2('teacher');
// console.log(devQn2('Timur')); // вызвали вторую функцию, которой передали имя
// console.log(teachQn2('Timur'));
