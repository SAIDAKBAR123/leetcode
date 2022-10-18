var countBits = function(n) {
    const numberList = []
    
    for (let i = 0; i <= n; i++) {
        numberList.push((i >>> 0).toString(2).split('').map(el => parseInt(el)).reduce((acc, curr) => curr = acc + curr, 0))
    }
    return numberList
};