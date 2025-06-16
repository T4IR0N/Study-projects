/* Техническое задание

Мне нужно посчитать, сколько я накоплю, если положу деньги в банк на разных условиях.
Оформи программу, как функцию calculateDeposit с четырьмя параметрами:

1. начальная сумма депозита;
2. процент годовых (число от 0 до 100);
3. срок вклада в месяцах;
4. с капитализацией процентов или нет (флаг с булевым значением).

Функция должна возвращать итоговую сумму депозита, округлённую до рублей с помощью Math.floor. Название параметров используй любые.

Если вклад простой, то процент годовых делится на 12 и умножается на срок вклада, а затем начальная сумма увеличивается на посчитанный процент.

Вклад с капитализацией считается сложнее: каждый месяц к сумме депозита прибавляются накопленный за месяц процент годовых
(не забывай делить процент на 12), а процент следующего месяца считается уже от увеличенной суммы депозита.

*/

let calculateDeposit = function (deposit, interest, term, isCapitalized) {
    let totalDeposit = 0;
    let monthlyInterest = (interest / 100) / 12;

    if (isCapitalized) {
        totalDeposit = deposit;
        for (let i = 1; i <= term; i++) { totalDeposit += monthlyInterest * totalDeposit }
      } else { totalDeposit = deposit + monthlyInterest * term * deposit }
        
    return Math.floor(totalDeposit);
};
  
  
let foo = calculateDeposit(900, 11, 9, true)
console.log(foo);

let getProfitableDeposit = function(deposit, term, simpleInterest, compoundInterest) {
    let simpleDeposit = calculateDeposit(deposit, simpleInterest, term, false);
    let capitalizedDeposit = calculateDeposit(deposit, compoundInterest, term, true);
    if (capitalizedDeposit > simpleDeposit) {
      return 'Выбирай капитализацию. Получишь ' + capitalizedDeposit
      } else {
        return 'Выбирай обычный вклад. Получишь ' + simpleDeposit
        }
    
    }

let bar = getProfitableDeposit(900, 9, 11, 11)
console.log(bar)
