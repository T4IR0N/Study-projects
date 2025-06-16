/* Техническое задание

Напиши программу, которая определяет сколько цифр в одном числе.
Само число записано в переменную number.
Найди количество цифр в этом числе и запиши результат в переменную quantity.

*/

const number = 2233333302;

// С помощью regExp

const quantity = String(number).match(/\d/g).length

// С помощью цикла

const getQuantity = (number) => {

  let quantity = 0;
  if (number) {
    for (let i = 1; Math.abs(number / i) >= 1; i*= 10) {
      quantity++;
    } 
  } else quantity = 1

  return quantity
  
}

console.log('Количество цифр: ' + getQuantity(number));
console.log(quantity);
