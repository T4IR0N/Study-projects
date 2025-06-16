/* Техническое задание

Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.
Функция должна принимать на вход три параметра.
Первый параметр — год, с которого нужно начать вести отсчёт (включительно).
Второй — год, которым этот отсчёт надо закончить (включительно).
Третий — число, которое обозначает сумму цифр в номере года.
Названия параметров могут быть любыми.
Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.

*/

const getYears = (firstYear, lastYear, targetSum) => {
  const years = [];
  for (let year = firstYear; year <= lastYear; year++) {
      
      let digitsSum = String(year).split('').map(Number).reduce((acc, num) => acc + num, 0);

      if (digitsSum === targetSum) years.push(year);
  }
  return years;
};

const yearsWithSum = getYears(1000, 2020, 17);
console.log(yearsWithSum);


/* let getYears = (firstYear, lastYear, sumYear) => {
  let years = [];
  for (let i = firstYear; i <= lastYear; i++) {
      let arrOfNumbers = String(i).match(/\d/g).map(Number)
      let sum = arrOfNumbers.reduce((acc, num) => acc + num, 0);
      if (sum === sumYear) years.push(i);
    };
  return years;
  };


let booba = getYears(2000, 2020, 7);
console.log(booba); */

/* let number = 5938
let quantity;

let arrOfNumbers = String(i).match(/\d/g).map(Number)
let sum = arrOfNumbers.reduce((acc, num) => acc + num, 0);

console.log(quantity);

console.log(sum); */
