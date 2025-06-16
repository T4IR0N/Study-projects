/* 
Создай функцию doHomework с двумя параметрами subject, callback, один из которых коллбэк-функция.
Создай стрелочную функцию alertFinished, которая будет передаваться в качестве коллбэка функции doHomework

*/


const doHomework = (subject, callback) => {
    console.log(`Starting my ${subject} homework.`);
    callback();
  };

const alertFinished = () => {
    console.log('Finished my homework');
};

doHomework('math', alertFinished);



  