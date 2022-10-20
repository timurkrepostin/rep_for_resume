
// Методы объектов 

// 1. Копирование объектов
// Неглубокое копирование. Объекты копируются по ссылке
let obj1 = {
    name: 'Denis',
};

let newObj = obj1; // такое копирование дает только ссылку на объект
console.log(obj1 === newObj) // true, значит изменение newObj приведет к изменению obj1, такое копирование не работает

let obj2 = {
    age: 20,
};

let obj3 = {
    age: 20,
    name: 'Ivan'
};

// 1. Метод Objetct.assign()
// 1.1 Введение. Метод делает поверхностное копирование, не глубокое
// Первым аргументом принимает таргет - объект который хотим копировать, вторым любое количество объектов, которые хотим копировать
let newObj1 = Object.assign({}, obj1); // newObj1 будет пустым объектом, потому что в фигурных скобках пусто
console.log(newObj1);
console.log(newObj1 === obj1); // false, значит такое изменение подходит

let newObj2 = Object.assign({}, obj1, obj2);
console.log(newObj2);

let newObj3 = Object.assign(obj1, obj2);
console.log(obj1); // мы добавили в obj1, убрав фигурные скобки и поставив obj1 в source, таки образом обновили obj1, добавив в него age
// но при этом теперь newObj3 === obj1

console.log('=======')

// 1.2 Objetct.assign() может совместить общие свойства и добавить новые свойства
let newObj4 = Object.assign(obj1, obj3) // в свойсте obj3 имя Иван
console.log(newObj4);
console.log(obj1); // тут видно, как вместо денис, теперь свойство имени иван

// 2. Методы JSON 
// Для того чтобы сделать глубокое копирование через JSON необходимо произвести два действия
let obj1Json = JSON.stringify(obj1); // Загнать объект в формат JSON
let newObj5 = JSON.parse(obj1Json); // Распарсить объект 
newObj5 = JSON.parse(JSON.stringify(obj1)); // Выполнение 

// 3. Метод Object.keys. Он возвращает ключи объекта в виде массива
let keys = Object.keys(obj3);
console.log(keys);

// 4. Метод Values. Возвращает значения объекта в виде массива
let values = Object.values(obj3);
console.log(values);

// 5. Метод entries. Возвращает массив массивов, где каждый элемент - массив ключ-значение
let entries = Object.entries(obj3);
console.log(entries);

// 6. fromEntries делает обратное действие entries
let fromEntries = Object.fromEntries([['a', 'value'], ['b', 'eulav']]);
console.log(fromEntries);
