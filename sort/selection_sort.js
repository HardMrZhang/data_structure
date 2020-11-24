/**
 * 选择排序
 * 找到数据结构中的最小值并放在第一位，接着找到第二小的值放在第二位
 * O(n²)
 */
const {
  Compare,
  defaultCompare,
  swap
} = require('../utils')

function selectionSort(array, compareFn = defaultCompare) {
  const {
    length
  } = array
  let minIndex
  for (let i = 0; i < length; i++) {
    minIndex = i
    for (let j = i; j < length; j++) {
      if (compareFn(array[minIndex], array[j]) === Compare.BIGGER_THAN) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(array, i, minIndex)
    }
  }
  return array
}

let arr = [5, 4, 3, 2, 1]
let res = selectionSort(arr)
console.log('res:', res);
