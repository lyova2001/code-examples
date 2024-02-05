const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j -= 1
        }
        arr[j + 1] = key
    }

    return arr
}
const arrToSort = [4, 3, 5, 7, 8, 2, 6, 1, 9]

const sortedArr = insertionSort(arrToSort)

console.log('insertion sortedArr', sortedArr);