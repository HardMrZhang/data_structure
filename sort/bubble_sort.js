/**
 * 冒泡排序
 * o(n²)
 */
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
}

function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function bubbleSort(array, compareFn = defaultCompare) {
  const {
    length
  } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === 1) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}

function swap(array, a, b) {
  /**
   * 中间变量交换两个值
   * const temp = array[a]
   * array[a] = array[b]
   * array[b] = temp
   */
  [array[a], array[b]] = [array[b], array[a]] //es5的交换方式
}
let arr = [5, 4, 3, 2, 1]
let res = bubbleSort(arr)
console.log('res:', res);

//如果数组是[4,5,3,2,1],其实4,5是不用必再比较的，但是传统的冒泡还是要比一下
//所以改进一下上面的冒泡排序
function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const {
    length
  } = array
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (compareFn(array, array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
let r = modifiedBubbleSort(arr)
console.log('r:', r);