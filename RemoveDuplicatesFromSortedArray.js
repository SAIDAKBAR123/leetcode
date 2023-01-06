var removeDuplicates = function(nums) {
    
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (element === nums[index + 1]) {
            nums[index] = null
        }
        if (nums[index] == null) {
            console.log(index)
        }
    }

    return nums
};

console.log(removeDuplicates([1,1,2,4,4]))

// const app = [1,2,3,4,4]

// console.log(app.splice(2, 1))