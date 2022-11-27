/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    //create a memory of last index of number
    let memory = {};
    //iterate through array starting at 0 comparing up to k away w double loop
    for (let i=0; i < nums.length; i++){
        if (memory[nums[i]] !== undefined && k >= i - memory[nums[i]]) return true;
        memory[nums[i]] = i;
    }
    return false;
};