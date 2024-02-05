const arr = [1, 2, 3]

const myReduce = function(array, fn, init) {
    let acc = init
    array.forEach((element, index) => {
        acc = fn(acc, element)
    });
    return acc
}

const sum1 = arr.reduce(((prev, value) => prev + value), 0)
const sum = myReduce(arr, (prev, value) => prev + value, 0)

// eslint-disable-next-line no-console
console.log('sum1', sum1);

// eslint-disable-next-line no-console
console.log('sum', sum);