class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let set1:Set<Number> = new Set();

        for(let i=0; i< nums.length; i++){
            set1.add(nums[i]);
        }

        return set1.size < nums.length
    }
}
