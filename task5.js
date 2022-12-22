// Задание 5.

// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

// Заголовок первого input — «номер страницы».
// Заголовок второго input — «лимит».
// Заголовок кнопки — «запрос».
// При клике на кнопку происходит следующее:

// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
// Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
// Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
// Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input.
// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://picsum.photos/v2/list?page=5&limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего успешно выполненного запроса (использовать localStorage).


const btn = document.querySelector('.j-btn');
const localData = localStorage.getItem('data');
if (localData) initImages(JSON.parse(localData));


btn.addEventListener('click', () => {
    const page = +document.getElementById('page').value;
    const limit = +document.getElementById('limit').value;

    let s = document.getElementById('j-result');
    s.textContent = '';
    if (!(page >= 1 && page <= 10)) {
        s.textContent = 'Номер страницы вне диапазона от 1 до 10';
        return;
    }
    if (!(limit >= 1 && limit <= 10)) {
        s.textContent = 'Лимит вне диапазона от 1 до 10';
        return;
    }
    if (!(limit >= 1 && limit <= 10 && page >= 1 && page <= 10)) {
        s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
        return;
    }

    // Делаем запрос за данными
    var requestOptions = {
        redirect: 'follow'
    };

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, requestOptions)
        .then((response) => {
            const result = response.json();
            return result;
        })

        .then((data) => {
            console.log(data);
            initImages(data);
            localStorage.setItem('data', JSON.stringify(data));

        })
})
function initImages(data) {
    let res = document.querySelector('#j-result');
    for (item of data) {
        let img = document.createElement('IMG');
        img.setAttribute('class', 'img-result');
        img.setAttribute('src', item.download_url);
        img.setAttribute('alt', item.author);
        img.setAttribute('width', '400');
        res.append(img);
    }
} 