/* 
Описание:
Сделайте GET-запрос к публичному API (например, JSONPlaceholder) и выведите полученные данные в консоль.

Подсказки:

Используйте функцию fetch().
Преобразуйте ответ с помощью response.json().
Используйте .then() для последовательной обработки промисов.
Добавьте .catch() для отлова возможных ошибок.

*/

const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
    
    
}
fetchData('https://jsonplaceholder.typicode.com/posts/2');

/* 
Задание 2: Отправка POST-запроса (Node.js)
Описание:
Отправьте POST-запрос для создания нового ресурса на том же API (например, JSONPlaceholder). Используйте JSON-данные.

Подсказки:
Работайте внутри асинхронной функции с использованием async/await.
Не забудьте указать метод запроса, заголовки (например, 'Content-Type': 'application/json') и тело запроса (body) в виде строки JSON.

*/

const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const answer = await response.json();
        console.log(answer);

    }
    catch (error) {
        console.log(error);
    }
}



postData('https://jsonplaceholder.typicode.com/posts', { title: 'Hello', body: 'world' });


/* 
Задание 3: Обработка ошибок и динамическое обновление DOM (Браузер)
Описание:
Сделайте GET-запрос для получения постов и отобразите результаты в виде списка на веб-странице. Если запрос завершился ошибкой, выведите соответствующее сообщение об ошибке.

Подсказки:

Создайте простую HTML-страницу с элементом (например, <ul id="posts"></ul>) для вывода данных.
Обрабатывайте состояние ответа (проверяйте response.ok) и вызывайте исключение при ошибке.
Используйте методы работы с DOM для создания и вставки элементов списка.

*/

const getDomElements = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const ul = document.getElementById('posts');
        data.forEach(elem => {
            const li = document.createElement('li');
            li.textContent = elem.title;
            ul.appendChild(li);
        });
    }
    catch (error) {
        console.log(error);
    }
}

getDomElements('https://jsonplaceholder.typicode.com/posts');


/* 
Задание 4: Параллельное выполнение нескольких запросов (Браузер / Node.js)
Описание:
Выполните несколько запросов одновременно (например, получение постов, комментариев и пользователей с JSONPlaceholder).
Используйте Promise.all() для одновременной обработки нескольких fetch-запросов и выведите результаты в консоль.

Подсказки:

Создайте массив с URL-адресами API.
Используйте Promise.all() для одновременного выполнения запросов.
Распакуйте массив с результатами (например, [posts, comments, users]) и обработайте их.
*/

const fetchAll = async (urls) => {
    try {
        const responses = await Promise.all(urls.map(url => fetch(url)));
        const data = await Promise.all(responses.map(response => response.json()));
        const [posts, comments, users] = data;

        const myPost = posts.find(post => post.id === 5);
        const myComment = comments.find(comment => comment.id === 5);
        const myUser = users.find(user => user.id === 5);
        console.log(myPost, myComment, myUser);
    }
    catch {

    }
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/users',
];

fetchAll(urls);

