/**
 * 二分法
 * 1.选择数组的中间值,如果选中值是待搜索值,则退出程序,
 * 2.如果待选中值比选中值要小,则返回步骤1并在选中值左边的子数组中寻找
 * 3.如果待搜索值比选中值要大,则返回步骤1并在选中值右边的子数组中寻找
 */

const {
    defaultCompare,
    Compare
} = require('../utils')
const quickSort = require('../sort/quick_sort')
const DOES_NOT_EXIST = -1

function binarySearch(array, value, compareFn = defaultCompare) {
    //先用快排把数组排序
    const sortArray = quickSort(array)
    let low = 0
    let high = sortArray.length - 1
    while (lessOrEquals(low, high, compareFn)) {
        const mid = Math.floor((low + high) / 2)
        const element = sortArray[mid]
        if (compareFn(element, value) === Compare.LESS_THAN) {
            low = mid + 1
        } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
            high = mid - 1
        } else {
            return mid
        }

    }
    return DOES_NOT_EXIST
}

function lessOrEquals(a, b, compareFn) {
    let comp = compareFn(a, b)
    return comp === Compare.LESS_THAN || comp === Compare.EQUALS
}

let arr = [1, 2, 3, 4, 5]
let res = binarySearch(arr, 1)
console.log(res)
