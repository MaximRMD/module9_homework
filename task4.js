// Задание 4
// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.
// При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  const osX = +document.getElementById('page').value;
  const osY = +document.getElementById('limit').value;

  let s = document.getElementById('j-result');
  s.textContent = '';
  if (!(osX >= 100 && osX <= 300 && osY >= 100 && osY <= 300)) {
    s.textContent = 'Одно из чисел вне диапазона от 100 до 300';
    return;
  }

  // Делаем запрос за данными
  fetch(`https://picsum.photos/${osX}/${osY}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    })
})