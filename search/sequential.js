/**
 * 顺序排序
 * 暴力搜索,将数据结构中的每个元素和需要搜索的元素作比较
 */
const {defaultEquals} = require('../utils')
const DOES_NOT_EXIST = -1

function sequentialSearch(array, value, equalsFn = defaultEquals) {
    for (let i = 0; i < array.length; i++) {
        if (equalsFn(value, array[i])) {
            return i
        }
    }
    return DOES_NOT_EXIST
}

let arr = [1,2,3,4,5]
let res = sequentialSearch(arr,1)
console.log(res)
