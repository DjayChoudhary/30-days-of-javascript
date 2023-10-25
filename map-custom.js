/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transformedArr = []
    // for(let i = 0; i < arr.length; i++) {
    //     transformedArr.push(fn(arr[i], i));
    // }

    arr.forEach((ele,i) => transformedArr.push(fn(ele, i)));

    return transformedArr;
};
