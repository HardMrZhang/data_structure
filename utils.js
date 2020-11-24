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

function swap(array, a, b) {
  /**
   * 中间变量交换两个值
   * const temp = array[a]
   * array[a] = array[b]
   * array[b] = temp
   */
  [array[a], array[b]] = [array[b], array[a]] //es5的交换方式
}

function defaultEquals(a,b){
  return a === b;
}

module.exports = {
  defaultCompare,
  Compare,
  swap,
  defaultEquals
}
