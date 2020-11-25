/**
 * 内插搜索
 * 改良版的二分搜索
 * 二分搜索总是检查mid位置上的值,而内插搜索可能会根据
 * 要搜索的值检查数组的不同地方
 */
const {
    defaultCompare,
    Compare,
    defaultEquals,
    defaultDiff
} = require('../utils')
const DOES_NOT_EXIST = -1

function interpolationSearch(array, value, compareFn = defaultCompare
    , equalsFn = defaultEquals
    , diffFn = defaultDiff
) {
    const {length} = array
    let low = 0;
    let high = length - 1
    let position = -1
    let delta = -1
    while (low <= high && biggerOrEquals(value, array[low], compareFn) && lessOrEquals(value, array[high], compareFn)) {
        delta = diffFn(value, array[low]) / diffFn(array[low], array[high])
        position = low + Math.floor((high - low) * delta)
        if (equalsFn(array[position], value)) {
            return position
        }
        if (compareFn(array[position], value) === Compare.LESS_THAN) {
            low = position + 1
        } else {
            high = position - 1
        }
    }
    return DOES_NOT_EXIST
}

function lessOrEquals(a, b, compareFn) {
    let comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

function biggerOrEquals(a, b, compareFn) {
    let comp = compareFn(a, b)
    return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS
}
let arr = [1, 2, 3, 4, 5]
let res = interpolationSearch(arr, 1)
console.log(res)
