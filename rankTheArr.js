function outer(){
    let a=0
    return function(){
        a++

        return a
    }
}
const outerFunc=outer()
console.log(outerFunc());
console.log(outerFunc());
console.log(outerFunc());
