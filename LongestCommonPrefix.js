
var longestCommonPrefix = function(strs) {
    // if the array is empty, return an empty string
    if (strs.length === 0) {
        return "";
    }
    // set the prefix to the first string in the array
    let prefix = strs[0];
    // loop through the array
    for (let i = 1; i < strs.length; i++) {
        // while the current string in the array does not start with the prefix
        while (strs[i].indexOf(prefix) !== 0) {
            // remove the last character from the prefix
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
    // return the prefix
    return prefix;
    
};

console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"