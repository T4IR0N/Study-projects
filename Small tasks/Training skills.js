/* Техническое задание

Напиши программу, которая будет следить за моими спортивными показателями.
В переменную indicators записан массив с моими спортивными характеристиками.
В массив levels записаны уровни каждого показателя. Каждый элемент этого массива соответствует по индексу элементу массива indicators.
В зависимости от времени тренировки, прокачиваются разные показатели. Время тренировки указано в минутах и записано в переменную trainingTime.
Если тренировка длится до 30 минут включительно, увеличивай скорость и ловкость на 3.
Если тренировка от 30 минут (не включая это значение) до одного часа (включая это значение), увеличивай гибкость на 3.
Если тренировка длится больше одного часа (не включая это значение), увеличивай силу и выносливость на 2.
*/

let indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
let levels = [8, 15, 9, 12, 11];
let trainingTime = 30;

// Через if конструкцию  перебор forEach

indicators.forEach(function(item, idx,) {
  if (item === 'скорость' || item === 'ловкость') {
    if (trainingTime <= 30) {
      levels[idx] += 3;
      };
    };
  if (item === 'гибкость') {
    if (trainingTime > 30 && trainingTime <= 60) {
      levels[idx] += 3;
      };
    };
  if (item === 'сила' || item === 'выносливость') {
    if (trainingTime > 60) {
      levels[idx] += 2;
      };
    };  
});
console.log(levels);


// Через switch конструкцию и перебор forEach


indicators.forEach((item, index) => {
    switch(item) {
      case 'скорость':
      case 'ловкость':
        if (trainingTime <= 30) {
          levels[index] += 3;
        }
        break;
  
      case 'гибкость':
        if (trainingTime > 30 && trainingTime <= 60) {
          levels[index] += 3;
        }
        break;
  
      case 'сила':
      case 'выносливость':
        if (trainingTime > 60) {
          levels[index] += 2;
        }
        break;
    }
  });
console.log(levels);


// Через indexOf() без цикла и перебора


let getLevels = () => {
    let speed = indicators.indexOf('скорость');
    let agility = indicators.indexOf('ловкость');
    let flexibility = indicators.indexOf('гибкость');
    let strength = indicators.indexOf('сила');
    let endurance = indicators.indexOf('выносливость');

    if (trainingTime <= 30) {
        levels[speed] += 3;
        levels[agility] += 3;
    } else if (trainingTime > 30 && trainingTime <= 60) {
        levels[flexibility] += 3;
    } else {
        levels[strength] += 2;
        levels[endurance] += 2;
    }
    return levels
};

getLevels();
console.log(levels)




