/**
 * 快速排序
 * 1.从数组中选择一个值作为主元,也就是数组中间的那个值
 * 2.创建两个指针(引用),左边一个指向数组的第一个值,右边一个指向数组的最后一个值。
 *   移动左指针直到找到比主元大的值,接着移动右指针直到找到比主元小的值,然后交换他们,
 *   重复这个过程,直到左指针超过了右指针。这个过程将使得比主元小的排在主元之前,比主
 *   元大的排在主元之后
 * 3.接着,算法对划分后的小数组(较主元小的值组成的子数组,以及较主元大的值组成的子数组)
 *   重复之前的两个步骤,直至数组已完全排序
 * O(nlog(n))
 */
const {
    Compare,
    defaultCompare,
    swap
} = require('../utils')

function quickSort(array, compareFn = defaultCompare) {
    let {
        length
    } = array
    return quick(array, 0, length - 1, compareFn)
}

function quick(array, left, right, compareFn) {
    let index
    if (array.length > 1) {
        index = partition(array, left, right, compareFn)
        if (left < index - 1) {
            quick(array, left, index - 1, compareFn)
        }
        if (index < right) {
            quick(array, index, right, compareFn)
        }
    }
    return array
}

function partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((left + right) / 2)] //定义主元
    let i = left
    let j = right //定义左右指针

    while (i <= j) { //左指针不要超过右指针,否则停止
        while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
            i++
        }
        while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
            j--
        }
        if (i <= j) {
            swap(array, i, j)
            i++
            j--
        }
    }
    return i
}
module.exports = quickSort
// let arr = [3, 5, 1, 6, 4, 7, 2]
// let res = quickSort(arr)
// console.log('res:', res);



