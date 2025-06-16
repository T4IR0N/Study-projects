/* Техническое задание

Напиши для меня программу-календарь.
Оформи программу в виде функции getDayOfWeek.У неё должно быть два параметра: день недели, на который выпадает первое число месяца,
и число, для которого нужно найти день недели в этом месяце.
Функция должна возвращать строку с названием дня недели.
Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.
*/



function getDayOfWeek1 (firstDayOfMonth, day) {
    const daysOfWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    
    let firstDayIndex = daysOfWeek.indexOf(firstDayOfMonth);
    let dayOfWeekIndex = (firstDayIndex + (day - 1)) % 7;
    console.log(dayOfWeekIndex)
    return daysOfWeek[dayOfWeekIndex];
}

getDayOfWeek1('воскресенье', 15)



// Формула Зеллера

const K = 2024 % 100;
const J = 2024 / 100;
const M = 9;
let dayOfMonth = 15;

let dayOfWeek = Math.round((dayOfMonth + (31 * (M - 2)/12) + K + (K/4) + (J/4) - 2 * J) % 7);
console.log(dayOfWeek)

// Алгоритм судного дня

function getDayOfWeek2 (year, month, day) {
    
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    day = parseInt(day, 10);
    if (month < 3) {
        --year;
        month += 10;
    } else month -= 2;
      
      let dayOfWeek = (day + 31 * month / 12 + year + Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400)) % 7;
      
      dayOfWeek = Math.floor(dayOfWeek);
      if (dayOfWeek === 0) dayOfWeek = 7;
      return dayOfWeek;
  }


let bob = getDayOfWeek2(2024, 9)

console.log(bob)



