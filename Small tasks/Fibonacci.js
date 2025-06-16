/* 
Создай функцию, которая добавляет в массив fibonacciNumbers число равное сумме двух предыдущих (числа Фибоначчи).
Количество чисел Фибоначчи ограничивается переменной numbersQuantity.
*/

let fibonacciNumbers = [1, 1];
let numbersQuantity = 7;
let fibonacciNumbers2 = [34, 44];



let getFibonacci = (numbers) => {
    for (let i = numbers.length - 1; i <= numbersQuantity; i++) {
      let sum = numbers[i] + numbers[i - 1];
      fibonacciNumbers.push(sum)
    }; 
  };

getFibonacci(fibonacciNumbers);
console.log(fibonacciNumbers)





fibonacciNumbers2 = Array(numbersQuantity).fill(0).reduce(function (acc) {
    return [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
  }, [...fibonacciNumbers2]);

console.log(fibonacciNumbers2)


