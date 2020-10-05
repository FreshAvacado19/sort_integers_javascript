function bubbleSort(array) {

    for (let i = 0; 1 < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
} 

const array = [5, 8, 10, 21, 48, 3, 7, 15, 23, 74, 82, 9,]
console.log(bubbleSort(arr))