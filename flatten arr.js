let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// arr.flat(1)
// console.log(arr)
function nested(arr){
    if(!Array.isArray(arr)) return arr;
    let emptyArr=[]
    for (const ele of arr) {
        emptyArr=emptyArr.concat(nested(ele))
    }
    return emptyArr
}
console.log(nested(arr));
