class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let arr1: number[]= new Array(nums.length * 2);

        for(let i =0; i <nums.length; i ++){
            arr1[i] = nums[i];
            arr1[nums.length + i] = nums[i];
        }

        return arr1;
    }
}
