/* Техническое задание

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.
Исходный массив записан в переменную numbers.
Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().

*/
let numbers = [1, 4, 5, 9, 2, 5, 1];
let uniqueNumbers = [];

// uniqueNumbers = numbers.filter((item) => numbers.indexOf(item) === numbers.lastIndexOf(item));


/* let dublicate = []
dublicate = numbers.filter((number, index, numbers) => {
  return numbers.indexOf(number) !== index;
  })

uniqueNumbers = numbers.filter(number => !dublicate.includes(number)); */

for (let i = 0; i < numbers.length; i++) {
    let check = true;

    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] == numbers[i] && j != i) {
        check = false;
      } 
    }
        if (check) {
        uniqueNumbers.push(numbers[i]);
      } 
  }

console.log(uniqueNumbers)