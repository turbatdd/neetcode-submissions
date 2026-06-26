class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums: number[]): number {
        let set: Set<number> = new Set();

        for (let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }

        let missing = 1;

        while (set.has(missing)) {
            missing++;
        }

        return missing;
    }
}
