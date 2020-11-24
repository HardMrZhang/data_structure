/**
 * 桶排序
 * 分布式排序算法
 * 将元素分为不同的桶(较少的数组),再使用一个简单的排序算法,例如插入排序(用来排序小数组的不错的算法)
 * 来对每个桶进行排序,再将所有的桶合并为结果数组
 * O(n+k)
 */

const insertionSort = require('./insertion_sort')

function bucketSort(array, bucketSize = 5) {
    if (array.length < 2) {
        return array
    }
    const buckets = createBuckets(array, bucketSize)
    return sortBuckets(buckets)
}

function createBuckets(array, bucketSize) {
    let minValue = array[0]
    let maxValue = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i]
        } else if (array[i] > maxValue) {
            maxValue = array[i]
        }
    }
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize + 1)
    const buckets = []
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }
    for (let i = 0; i < array.length; i++) {
        const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
        buckets[bucketIndex].push(array[i])
    }
    return buckets

}

function sortBuckets(buckets) {
    const sortArray = []
    for (let i = 0; i < buckets.length; i++) {
        if (buckets[i] != null) {
            insertionSort(buckets[i])
            sortArray.push(...buckets[i])
        }
    }
    return sortArray
}
let arr = [8 ,2, 3, 4, 3, 6, 6, 3, 9 ]
let res = bucketSort(arr)
console.log('res:', res);
