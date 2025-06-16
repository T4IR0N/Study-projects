// БЫСТРАЯ СОРТИРОВКА
// рекурсивная функция быстрой сортировки

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

    // объединяем массивы

    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);

    return sortedLeft.concat(pivot, sortedRight);

}

console.log(quickSort([2, 45, 67, 1, 12, 9, 0, 33]));

