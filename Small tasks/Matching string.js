/* Техническое задание

Напиши программу, которая будет собирать статистику из пользовательских данных.
Массив с данными записан в переменную usersData.
Найди все элементы массива с данными, в которых содержится определённая строка.
Эта искомая строка записана в переменную query.
Количество подходящих элементов (пользователей), которые подходят под критерий, запиши в переменную matchingUsers.
Чтобы проверить наличие строки в элементе массива, используй команду indexOf().
*/

let usersData = ['Виталий Иванович', 'Иннокентий Петрович', 'Александр Александрович', 'Игорь Олегович', 'Евгений Петрович', 'Игнат Денисович', 'Сергей Александрович', 'Семён Петрович'];
let query = 'Александрович';


let matchingUsers = usersData.filter((item) => item.indexOf(query) != -1).length;

console.log(matchingUsers);


let getMatchingUsers = (users, query) => {
    
    let matchingUsers = 0;

    for (let user of users) {
        let index = user.indexOf(query);
        if (index != -1) matchingUsers++;
    }
    return matchingUsers
};

console.log(getMatchingUsers(usersData, query));




