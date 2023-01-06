
var maxNumberOfBalloons = function(text) {
    const obj = { b:0, a:0, l: 0, o: 0, n: 0 }

    for (let i = 0; i < text.length; i++) {
        if (obj.hasOwnProperty(text[i])) {
            console.log(text[i])
            obj[text[i]]++
        }
    }
    console.log(obj)
    obj.l = Math.floor(obj.l / 2)
    obj.o = Math.floor(obj.o / 2)
    console.log(obj)
   return Math.min(...Object.values(obj))

};

console.log(maxNumberOfBalloons("leetcode"))