
function func (strNum , strTrans) {
    var strList = strTrans.split('')
    var val = new Map()
        // 2: c, 3: a, 4:t, 1:a
    for (var index = 0; index < strNum.length; index++) {
        if (val.get(strNum[index]) ) {
            if (val.get(strNum[index]) != strList[index]) {
                return 'NO'
            }
        }
        val.set(strNum[index], strList[index])
    }

    return 'YES'
}

var n = +readline();

for(var i = 0; i < n; i++) {
  
  var size = +readline()
  var arr = readline().split(' ').map(el => +el)
  var str = readline();

  var result = func( arr, str)
  print(result)
}