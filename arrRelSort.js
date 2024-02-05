/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = (arr1, arr2) => {
    const countTable = arr1.reduce((acc, curr) => ({
        ...acc,
        [curr]: acc[curr] ? ++acc[curr] : 1
    }), {})

    const res = arr2.reduce((acc, value) => {
        return acc.concat(new Array(countTable[value]).fill(value))
    }, [])

    return res
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))