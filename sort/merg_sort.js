/**
 * 归并排序
 * ①迭代法
 * ②递归法
 * O(nlog(n))
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

//②递归分组
function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const length = array.length
    const middle = Math.floor(length / 2)
    // console.log(array.slice(0, middle));c
    const left = mergeSort(array.slice(0, middle), compareFn)
    const right = mergeSort(array.slice(middle, length), compareFn)
    // console.log(left, right);
    array = merge(left, right, compareFn)
  }
  return array
}
//①迭代排序
function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  let res = []
  while (i < left.length && j < right.length) {
    res.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++])
  }
  return res.concat(i < left.length ? left.slice(i) : right.slice(j))
}

let arr = [15, 10, 11, 14, 9, 3, 2, 1]
let result = mergeSort(arr)
console.log(result);