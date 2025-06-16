/* Техническое задание

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке, задом наперёд.
Массив записан в переменную numbers.
Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

*/

let numbers = [1, 3, 5, 7, 9, 11];


let last = numbers.length - 1;

for (let i = 0; i < numbers.length/2; i++) {  
  let first = numbers[i];
  numbers[i] = numbers[last];
  numbers[last] = first;
  last--;
};


console.log(numbers)
