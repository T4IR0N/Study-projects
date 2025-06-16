/* 
Напиши программу, которая из строки символов chars генерирует случайный ключ.
Запиши этот ключ в переменную password

*/

const chars = 'abcdefghijklmnopqrstuvwxyz';

const generateKey = (alphabet) => {
    const max = alphabet.length;
    return (length) => {
        let key = '';
        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * max);
            key += alphabet[index];
        }
        return key;
    }
}

const generatePassword = generateKey(chars);
const password = generatePassword(12)
console.log({password});


