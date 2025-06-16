/* 
1. Отсортируй массив строк accords по длине символов, используя sort().

2. Отсортируй массив строк books по заданному количеству символов в переменнных minNumber, maxNumber, используя filter().
Отсортированные строки названий книг собираются в массив filteredBooks.

*/

let accords = [
    "A", "A", "A7", "Am", "Am", "Ab", 
    "B","B7", "Bm", "Bb", 
    "C", 'C', 'C7', 'Cm', 'C\#m',
    "D\#", 'D', 'D7', 'Dm', 'D\#m', "Db", 
    'E', 'E7', 'Em', "Eb", 
    "F\#", 'F', 'Fm', 'F\#m', 'F7',
    "G\#", "G", "Gm", "G\#m", "Gb", "G7", 
    "H", "Hm", "Hb", "H7"];

accords.sort((a, b) => { return a.length - b.length })

console.log(accords);

let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
let minNumber = 3;
let maxNumber = 5;
let filteredBooks = [];


filteredBooks = books.filter((book) => book.length >= minNumber && book.length <= maxNumber);


console.log(filteredBooks);