class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result: number[][] = [];

        nums.sort((a, b) => a - b);

        console.log(nums);

        // [-4,-1,-1, 0,1,2]

        for (let i = 0; i < nums.length; i++) {
            let iVal = nums[i];

            if (iVal > 0) {
                break;
            }

            if (i > 0 && iVal === nums[i - 1]) {
                continue;
            }

            let j = i + 1;
            let k = nums.length - 1;

            if (iVal === nums[k] && iVal === 0) {
                return [[0, 0, 0]];
            }

            while (j < k) {
                const jVal = nums[j];
                const kVal = nums[k];

                const diff = iVal + jVal + kVal;

                if (diff > 0) {
                    k--;
                } else if (diff < 0) {
                    j++;
                } else {
                    result.push([iVal, jVal, kVal]);
                    j++;
                    k--;

                    while (j < k && nums[j] === nums[j - 1]) {
                        j++;
                    }
                }
            }
        }
        return result;
    }
}
