// Задание 1.
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");

let listStudent = [];
students.forEach(item => {
  const name = item.querySelector("name");
  const lang = name.getAttribute('lang');

  listStudent.push({
    name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
    age: `${item.querySelector('age').textContent}`,
    prof: `${item.querySelector('prof').textContent}`,
    lang: lang,
  })
});

console.log("list", listStudent);