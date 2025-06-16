/* Задания
https://github.com/HowProgrammingWorks/Book/blob/master/content/ru/2-9-Tasks.md
*/

const items = [ { price: 40 }, { price : 120 }, {price: '505'}, {price: 350 } ];
const bubble = [1, 2, 4, 5, 6, 6, 9, 510]

// Функция возвращает сумму всех цен

let getTotalPrice = (items) => {
  let totalPrice = 0;
  for (let item of items) {
    if (typeof item.price === 'number' && item.price > 0) {
      totalPrice += item.price;
    };
    console.log(`Price: ${totalPrice}`);
  }
  return totalPrice;
}

getTotalPrice(items);


// Функция, которая проходит по объекту items и находит товар по его имени

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
  ],
  Textile: [
    { name: 'Bag', price: 50 }
  ],
  accessories: [
    {name: 'phone case', price: 8},
    {name: 'wristwatch', price: 900},
    { name: 'Laptop', price: 1000 },
  ],
};

const findItem = (basket, name) => {
  const result = [];
  for (const key in basket) {
    const items = basket[key];
    for (const item of items) {
      if (item.name === name) result.push(item)
    }
  }
  return result;
}

let findLaptop = findItem(purchase, 'Laptop');

console.log(findLaptop);

