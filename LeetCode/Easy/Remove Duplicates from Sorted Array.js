/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
//dont use splice its very slow,
    for (let i=0; i<nums.length; i++){
        if (nums[i]==nums[i+1]) { nums.splice(i,1); i--;}
    }
    return nums.length;
};
// Wayyyy faster, two pointers, 
// let left = 0;    
for(let right=1; right<nums.length; right++)
if(nums[left] != nums[right]) nums[++left] = nums[right];    
return left+1;