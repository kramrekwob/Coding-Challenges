/**
 * @param {number[]} nums
 * @return {number}
 */

//very little extra memory, but very slow because of how many times its accessing the array
 var singleNumber = function(nums) {
    for (let i = 0; i< nums.length; i++){
        if ( nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i]) ) return nums[i];
    }
};
//one single loop through the array, then another loop through keys, but takes up a lot of memory
// O 2n 
var singleNumber = function(nums) {
    let duplicates = {};
    for (let i=0; i<nums.length; i++){
        if (duplicates[nums[i]]) duplicates[nums[i]]++;
        else duplicates[nums[i]] = 1;
    }
    return Object.keys(duplicates).find(key => duplicates[key] === 1)
}