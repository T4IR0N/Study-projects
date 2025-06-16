
let users = [21, 4, 8, 2, 1, 6, 3, 11, 9];

const bubbleSort = function(array) {

  for (let i = 0; i < array.length - 1; i++) {
    let minValue = array[i];
  
    for (let j = i + 1; j <= array.length - 1; j++) {
      
      if (array[j] < minValue) {
        minValue = array[j];
        [array[i], array[j]] = [minValue, array[i]]

      }
    }
  }

  return array

}

console.log(bubbleSort(users));



