/**
 * 插入排序
 * 简单来说就是打牌的时候码牌的顺序
 * O(n)
 */

const {
  Compare,
  defaultCompare,
} = require('../utils')

function insertionSort(array, compareFn = defaultCompare) {
  const {
    length
  } = array
  for (let i = 0; i < length; i++) {
    let j = i
    let temp = array[i]
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = temp
  }
  return array
}
module.exports = insertionSort
// let arr = [5, 4, 3, 2, 1]
// let res = insertionSort(arr)
// console.log('res:', res);
