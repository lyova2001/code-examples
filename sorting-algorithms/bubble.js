const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const acc = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = acc
            }
        }
    }
    return arr
}
const arrToSort = [4, 3, 5, 7, 8, 2, 6, 1, 9]

const sortedArr = bubbleSort(arrToSort)

console.log('bubble sortedArr', sortedArr);