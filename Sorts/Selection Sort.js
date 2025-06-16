/* Техническое задание

Напиши сортировку массива выбором.
Массив записан в переменную numbers.
Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.
Добавь возможность сортировки по свойствам объекта в массиве

*/

let people = [ 
  {"name":"Василий","age":6},
  {"name":"Виктор","age":4},
  {"name":"Пётр","age":8},
  {"name":"Иннокентий","age":1}
 ];

let numbers = [3, 5, 15, 6, 2, 1];

const selectionSort = function(array, property) {

  for (let i = 0; i < array.length - 1; i++) {
    // Предполагаем, что текущий элемент - это минимальное значение
    let minIndex = i;
  
    // Находим индекс минимального элемента в оставшейся части массива
    for (let j = i + 1; j < array.length; j++) {
      
      if (array[j][property] < array[minIndex][property]) {
          minIndex = j;
        }
      else if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
  
    // Меняем местами текущий элемент с минимальным
    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }

  return array

}

console.log(selectionSort(numbers));
console.log(selectionSort(people, 'name'));
