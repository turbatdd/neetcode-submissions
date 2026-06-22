class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums == null || nums.length == 0) return 0;

        const data = new Set(nums);
        let res = 0;

        for (let num of nums) {
            let count = 0;
            let cur = num;

            while (data.has(cur)) {
                count++;
                cur++;
            }

            res = Math.max(count, res);
        }

        return res;
    }
}
