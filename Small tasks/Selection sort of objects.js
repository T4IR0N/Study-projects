/*
Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать.
Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.
Функция должна возвращать отсортированный массив объектов.
Значения в массиве должны увеличиваться от меньшего к большему.

*/

let people = [ 
              {"name":"Василий","age":26},
              {"name":"Виктор","age": 34},
              {"name":"Пётр","age": 18},
              {"name":"Иннокентий","age": 38}
             ];


let getSortedArray = function(array, property) {
    
    for (let i = 0; i < array.length - 1; i++) {
        // Предполагаем, что текущий элемент - это минимальное значение
        let minIndex = i;
      
        // Находим индекс минимального элемента в оставшейся части массива
        for (let j = i + 1; j < array.length; j++) {
          if (array[j][property] < array[minIndex][property]) {
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




console.log(getSortedArray(people, "age"));

