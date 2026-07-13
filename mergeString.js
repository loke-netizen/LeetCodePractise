let str1="lokes"
let str2="manikandan"
function merge(str1,str2){
    let maxi=Math.max(str1.length,str2.length);
    let newstr=""
    for (let i=0;i<maxi;i++) {
        if(str2[i]){
            newstr+=str2[i]
        }
        if(str1[i]){
            newstr+=str1[i]
        }
    }
    return newstr
}
console.log(merge(str1,str2));
