/* Техническое задание

Напиши программу, которая проверяет, является ли число палиндромом.
Число записано в переменную poly.
Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.
Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/

let poly = 1221;
let ylop = 0;
let isPalindrome = false;

ylop = poly.toString().split('').reverse().join('');

isPalindrome = (poly == ylop)

console.log(isPalindrome);

/* Палиндром */

function palindrome1(string) {

    string = string.toString().toLowerCase();
  
    for (let i = 0;  i < string.length / 2; i++) {
      const lastIndex = (string.length - 1) - i;
      if (string[i] !== string[lastIndex]) return false
    }
    return true
    
    }
  
  
  function palindrome2(string) {
  
    string = string.toString().toLowerCase();
    
    if (string.length <= 1) return true;
    if (string[0] !== string[string.length - 1]) return false
    return palindrome2(string.slice(1, -1));
    
    
  }




