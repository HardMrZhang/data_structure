/**
 * 计数排序
 * 先建一个要排序数组maxValue+1长度的空数组,然后遍历待排序数组,如果待
 * 排序数组第一个元素是5,就在新数组的索引为5+1的元素上+1,依次类推
 */

function countingSort(array) {
  if (array.length < 2) {
    return array
  }
  let maxValue = findMaxValue(array)
  const counts = new Array(maxValue + 1)
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  });
  let sortedIndex = 0
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i
      count--
    }
  })
  return array
}

function findMaxValue(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}
let arr = [5, 4, 3, 2, 1]
let res = countingSort(arr)
console.log('res:', res);