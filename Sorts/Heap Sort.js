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
