/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++)
        if (nums[i]===nums[j]) return true;
    }
    return false;
};
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//small change