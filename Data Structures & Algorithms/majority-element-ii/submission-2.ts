class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums: number[]): number[] {
        const res: Set<number> = new Set();

        const length = Math.floor(nums.length / 3);

        for (let num of nums) {
            let count = 0;

            for (let i of nums) {
                if (i == num) count++;
            }

            if (count > length) res.add(num);
        }


        return Array.from(res);
    }
}
