const findLongestChain = function(pairs) {

    pairs.sort((a, b) => {
        if (a[1] >= b[1]) {
            return 1
        } else {
            return -1
        }
    })

    let lastItem = -Infinity
    let length = 0

    for (let index = 0; index < pairs.length; index++) {
        const currItem = pairs[index]
        if (currItem[0] > lastItem) {
            length++
            lastItem = currItem[1]
        }
    }

    return length
};

const pairs = [[1,2],[2,3],[3,4]] // 2
console.log('findLongestChain(pairs)', findLongestChain(pairs));

const pairs2 = [[1,2],[7,8],[4,5]] // 3
console.log('findLongestChain(pairs)2', findLongestChain(pairs2));