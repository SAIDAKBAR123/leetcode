
'use strict';
 
process.stdin.resume();
process.stdin.setEncoding('utf-8');
 
let inputString = '';
let currentLine = 0;
 
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
 
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});
 
function readline() {
    return inputString[currentLine++];
}
 
function main() {
    var n = +readline();
 
for(var i = 0; i < n; i++) {
  
  var vars = readline().split(' ');
  var str = readline();
 
  var result = traffic(vars[1], str)
  console.log(result)
}
}

function traffic (color = 'r', cases = 'rggry') { // r, rggry
    var casesList = cases.split('')
    var MAX = 0
    var rList = null
    var resultG = null

    for (let idx = 0; idx < casesList.length; idx++) {
        var element = casesList[idx];
        // console.log(element)
        if (color == element && rList == null) {
            rList = idx
        }
        if (element == 'g') {
            resultG = resultG == null ? idx : resultG
            if (rList != null) {
                if (idx - rList > MAX) MAX = idx - rList
                rList = null
            }
        }
        
     }

     if (rList !== null) {
        var arrLength = casesList.length - 1
        var Len = arrLength - rList + resultG + 1
        if (Len > MAX) MAX = Len
     }
    return MAX
}

console.log('Expected: 3 => ', traffic('r', 'rggry')) // Expected: 3
console.log('Expected: 0 =>', traffic('g', 'g')) // Expected: 0
console.log('Expected: 1 => ',traffic('r', 'rgrgyrg')) // Expected: 1
console.log('Expected: 2 => ', traffic('r', 'rrg')) // Expected: 2
console.log('Expected: 4 => ', traffic('y', 'rrrgyyygy')) // Expected: 4
