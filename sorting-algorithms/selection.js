const selectionSort = (arr) => {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        const acc = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = acc
    }

    return arr
}
const arrToSort = [4, 3, 5, 7, 8, 2, 6, 1, 9]

const sortedArr = selectionSort(arrToSort)

console.log('selections sortedArr', sortedArr);