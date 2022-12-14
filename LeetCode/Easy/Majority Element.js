/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //establish hashmap
    let map = {};
    //check all numbers 
    for (let i=0; i<nums.length; i++){
        if (!map[nums[i]]) map[nums[i]]=1
        else map[nums[i]] += 1;
        if (map[nums[i]] > nums.length/2) return nums[i]
    }
    console.log(map)
};