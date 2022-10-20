/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let dictionary = {};
    for (let i=0; i<nums.length; i++){
        let n = nums[i];
        if (dictionary[target - n]>=0) {return [dictionary[target - n],i];}
        else {dictionary[n] = i;}
    }
};
//brute force is 2 loops, using a map for each value already visited makes it O(N) and space is N too