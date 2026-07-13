function rank(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => a - b);
    let frequencyMap={}
    for(let i=0;i<sorted.length;i++){
        frequencyMap[sorted[i]]=i+1
    }
    return arr.map(ele=>frequencyMap[ele])
}



console.log(rank([40, 10, 20, 30]))
