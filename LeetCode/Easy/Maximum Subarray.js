/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //aboslute 0
    let globalMax = Number.NEGATIVE_INFINITY;
    //anything negative to the left of the pointer gets discarded
    let tempMax = 0;
   for (let i=0; i<nums.length; i++){
    //add the rightmost number, if its any higher keep it
       tempMax += nums[i];
       if (tempMax > globalMax) {
        //global max is the local max
           globalMax = tempMax;
       };
       //if the max is < 0 then reset to 0
       if (tempMax < 0) {
           tempMax = 0;
        };
   }

   return globalMax;
};