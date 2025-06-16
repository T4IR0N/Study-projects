/* Вычислить число Пи с точностью до 15 знаков с помощью формулы Бэйли — Боруэйна — Плаффа
*/


function calculatePi() {
    let pi = 0;
    for (let k = 0; k <= 10; k++) {
        pi += (1 / Math.pow(16, k)) * (4 / (8 * k + 1) - 2 / (8 * k + 4) - 1 / (8 * k + 5) - 1 / (8 * k + 6));
    }
    return pi;
}

console.log(calculatePi())