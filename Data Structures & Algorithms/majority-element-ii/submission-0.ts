class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        let result: number[] = [];
        let counts: Map<number, number> = new Map();
        const length = nums.length / 3;

        for (let num of nums) {
            counts.set(num, (counts.get(num) ?? 0) + 1);
        }

        for (const [num, count] of counts) {
            if (count > length) {
                result.push(num);
            }
        }

        return result;
    }
}
