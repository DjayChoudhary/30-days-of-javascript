/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = []
    arr.forEach((ele, i)=>fn(ele, i)&&filteredArr.push(ele));
    return filteredArr;
};
