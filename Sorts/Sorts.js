arr = [11, -2, 3, 4, -9, 6]


// БЫСТРАЯ СОРТИРОВКА
// рекурсивная функция быстрой сортировки
// на вход получает массив, который нужно отсортировать
function quickSort(arr) {
    // если длина массива меньше двух (в нём один элемент или нет их вообще)
    // то возвращаем массив как есть, без обработки
    if (arr.length < 2) return arr;
    // берём первый элемент массива как опорный
    let pivot = arr[0];
    // будущие левые и правые части массива
    const left = [];
    const right = [];
    // перебираем весь массив по порядку
    for (let i = 1; i < arr.length; i++) {
      // если опорный элемент больше текущего
      if (pivot > arr[i]) {
        // то добавляем текущий элемент в левую часть
        left.push(arr[i]);
      // в противном случае
      } else {
        // добавляем текущий элемент в правую часть
        right.push(arr[i]);
      }
  
      // выводим текущее состояние массива в консоль 
      // это необязательный шаг, он здесь для наглядности 
      console.log(left);
      console.log(right);
    }
    // отправляем на рекурсивную обработку левую и правую части массива
    // и возвращаем результат в виде двух склеенных массивов
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  // запускаем сортировку
  let newArr = quickSort(arr);

console.log(newArr)

// СОРТИРОВКА КУЧЕЙ (ПИРАМИДАЛЬНАЯ)
function HeapSort(data) {
    // Формируем первоначальное сортирующее дерево
    for (let start = Math.floor((data.length - 2) / 2); start >= 0; start--) {
        HeapSift(data, start, data.length - 1);
    }

    // Сортировка
    for (let end = data.length - 1; end > 0; end--) {
        // Меняем местами
        [data[end], data[0]] = [data[0], data[end]];
        // Восстанавливаем сортирующее дерево
        HeapSift(data, 0, end - 1);
    }
    return data;
}

function HeapSift(data, start, end) {
    let root = start;

    while (true) {
        let child = root * 2 + 1; // Левый потомок
        if (child > end) break; // Левый потомок за пределами подмассива

        // Если правый потомок тоже в пределах подмассива
        if (child + 1 <= end && data[child] < data[child + 1]) {
            child += 1; // Выбираем наибольший
        }

        // Если больший потомок больше корня
        if (data[root] < data[child]) {
            [data[root], data[child]] = [data[child], data[root]];
            root = child; // Двигаемся вниз по дереву
        } else {
            break;
        }
    }
}






function quickSort(arr) {
    // если длина массива меньше двух (в нём один элемент или нет их вообще)
    if (arr.length < 2) return arr;

    // берём первый элемент массива как опорный
    let pivot = arr[0];
    const left = [];
    const right = [];

    // перебираем весь массив по порядку,
    // если опорный элемент больше текущего элемента, добавляем текущий элемент в левую часть
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // объединяем массивы без использования concat
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    const result = [];
    // Добавляем элементы из отсортированной левой части
    for (let elem of sortedLeft) {
        result.push(elem);
    }
    // Добавляем опорный элемент
    result.push(pivot);
    // Добавляем элементы из отсортированной правой части
    for (let elem of sortedRight) {
        result.push(elem);
    }

    return result; // Возвращаем итоговый массив
}




Array.prototype.mySort = function(compareFunction) {

    if (typeof compareFunction !== 'function' && compareFunction !== undefined) {
        throw TypeError(`The comparison function must be either a function or undefined: ${compareFunction}`);
    }

    if (!compareFunction) {
        compareFunction = ((a, b) => String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0);
    }

    const quickSort = (arr) => {
       
        if (arr.length < 2) return arr;
        let firstElem = arr[0];
        const left = [];
        const right = [];
    
        for (let i = 1; i < arr.length; i++) {
            if (compareFunction(arr[i], firstElem) < 0) {
                left[left.length] = arr[i];
            } else {
                right[right.length] = arr[i];
            }
        }
    
        const sortedLeft = quickSort(left);
        const sortedRight = quickSort(right);
        const result = [];
   
        for (let elem of sortedLeft) {
            result[result.length] = elem;
        }
    
        result[result.length] = firstElem;

        for (let elem of sortedRight) {
            result[result.length] = elem;
        }
        return result; 
    }

    const sorted = quickSort([...this]);

    for (let i = 0; i < this.length; i++) {
        this[i] = sorted[i];
    }
    
    return this
}


let mySorted = [5, 4, 3, 2, 1];
let sorted = [5, 4, 3, 2, 1];

mySorted.mySort();
sorted.sort();

console.log(mySorted);
console.log(sorted);



for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (compareFunction(this[j], this[j + 1]) > 0) {
                let shift = this[j];
                this[j] = this[j + 1];
                this[j + 1] = shift;
            }
        }
    }