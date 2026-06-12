class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let arr1: number[] = nums;
        let res: number[]= arr1.concat(nums);

        return res;
    }
}
