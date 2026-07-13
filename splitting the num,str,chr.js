let arr=[1,"l",4,"Lok","e",5,55,"sh"]
function rearrange(arr){
    let numArr=[]
    let chrArr=[]
    let strArr=[]

    for (const ele of arr) {
        if(typeof ele==="number"){
            numArr.push(ele)
        }
        else if(typeof ele==="string"){
            if(ele.length===1){
                chrArr.push(ele)
            }
            else{
                strArr.push(ele)
            }
        }
    }
    return {numArr,chrArr,strArr}
}
console.log(rearrange(arr));
