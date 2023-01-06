var twoSum = function(arrayNums, target) {
    var obj = {};
    var result = [];

    arrayNums.forEach((el, i) => {
        let item = el;
        let val = target - item;
        if (obj.hasOwnProperty(val)) result = [obj[val], i];
        obj[item] = i;
    })
    return result
};

console.log(twoSum([2, 7, 11, 15], 9))