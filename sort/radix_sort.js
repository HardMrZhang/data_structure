/**
 * 基数排序
 * 根据数字的有效位或者基数将整数分布到桶里
 */


function radixSort(array, radixBase = 10) {
    if (array.length < 2) {
        return array
    }
    const maxValue = findMaxValue(array)
    const minValue = findMinValue(array)
    let significantDigit = 1
    while ((maxValue > minValue) / significantDigit >= 1) {
        array = countingSortForRadix(array, radixBase, significantDigit, minValue)
        significantDigit *= radixBase
    }
    return array

}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
    let bucketsIndex
    const buckets = []
    const aux = []
    for (let i = 0; i < array.length; i++) {
        buckets[i] = 0
    }
    for (let i = 0; i < array.length; i++) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        buckets[bucketsIndex]++
    }
    for (let i = 1; i < radixBase; i++) {
        buckets[i] += buckets[i - 1]
    }
    for (let i = array.length - 1; i >= 0; i--) {
        bucketsIndex = Math.floor(((array[i] - minValue) / significantDigit) % radixBase)
        aux[--buckets[bucketsIndex]] = array[i]
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = aux[i]
    }
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

function findMinValue(array) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

let arr = [5, 4, 3, 2, 1]
let res = radixSort(arr)
console.log('res:', res);
