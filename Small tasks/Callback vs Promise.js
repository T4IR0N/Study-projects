/* 
Описание задачи:

Функция getData(callback)

Симулирует загрузку данных с задержкой в 1 секунду (например, с помощью setTimeout).
После задержки вызывает callback с полученными данными (например, строкой "data").

Функция processData(data, callback)

Принимает данные, полученные от getData.
Симулирует обработку данных с задержкой в 1 секунду.
После обработки вызывает callback с обработанными данными (например, "processed data").

Функция saveData(data, callback)

Принимает обработанные данные.
Симулирует сохранение данных с задержкой в 1 секунду.
После сохранения вызывает callback с результатом (например, "Data saved!").
Требования:

Напишите последовательный вызов этих функций таким образом, чтобы данные шли по цепочке: сначала получены, затем обработаны, затем сохранены.
Подсказка: Будет получаться «callback hell», если вы будете вкладывать один callback в другой.

*/

function getData(callback) {
    setTimeout(() => {
      let data = "data";
      callback(data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      let processedData = "processed " + data;
      callback(processedData);
    }, 1000);
  }
  
  function saveData(data, callback) {
    setTimeout(() => {
      let savedData = "Data saved: " + data;
      callback(savedData);
    }, 1000);
  }
  

  getData((data) => {
    console.log("Получены данные:", data);
  
    processData(data, (processedData) => {
      console.log("Обработанные данные:", processedData);
  
      saveData(processedData, (savedData) => {
        console.log(savedData);
      });
    });
  });


/* 
Описание задачи:

Функция getDataPromise()

Возвращает промис, который через 1 секунду резолвится со значением (например, "data").

Функция processDataPromise(data)

Принимает данные и возвращает промис, который через 1 секунду резолвится с обработанными данными (например, "processed data").

Функция saveDataPromise(data)

Принимает обработанные данные и возвращает промис, который через 1 секунду резолвится с результатом сохранения (например, "Data saved!").
Требования:

Составьте цепочку промисов с использованием .then(), чтобы последовательно выполнить загрузку, обработку и сохранение данных.
Добавьте обработку ошибок через .catch().
При завершении цепочки выведите итоговый результат в консоль.
*/

function getDataPromise() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000, null)
    })
}

function processDataPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!data) return reject(new Error("data no found"))
            data = "processed: (" + data + ")";
            console.log(data);
            resolve(data)
        }, 1000)
    })
}

function saveDataPromise(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!data) return reject(new Error("data no found"))
            data = "Data saved: (" + data + ")";
            console.log(data);
            resolve(data)
        }, 1000)
    })
}


getDataPromise()
    .then(processDataPromise)
    .then(saveDataPromise)
    .catch(error => {
        console.error("Ошибка при сохранении данных:", error);
    });


