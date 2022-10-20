
// Шаблонные строки

const firstName = 'Denis';
const lastName = 'Mescheryakov';
const age = 30;
let str;

str = 'Hello my name is ' + firstName + ' ' + lastName; // таким образом можно сформировать строку, особенно для маленькой строки
// но для удобства можно сделать иначе, на примере шаблона html
str = '<ul>' +
      '<li>First Name: ' + firstName + '</li>' +
      '<li>Last Name: ' + lastName + '</li>' +
      '<li>Age: ' + age + '</li>' +
      '</ul>';
// console.log(str);

// ES6; // `` это новый синтаксис объявления строк, с возможностью добавления в них переменных(доллар+фигурные скобки)
str = `
<ul>
  <li>First name ${ firstName }</li>
  <li>Last name ${ lastName }</li>
  <li>Age ${ age }</li>
  <li>Math.random ${ Math.random() }</li>
  <li>5 + 5: ${ 5 + 5 }<li/>
</ul>
`; 
document.body.innerHTML = str;
