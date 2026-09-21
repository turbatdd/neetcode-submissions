class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let result: number[][] = [];

        nums.sort((a, b) => a - b);

        // [-1,0,1,2,-1,-4]
        // [-4,-1,-1,0,1,2]

        for (let i = 0; i < nums.length - 2; i++) {
            let iVal = nums[i];
            let l = i+1
            let r = nums.length - 1;

            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            while (l < r) {
                const dif = iVal + nums[l] + nums[r];

                if (dif === 0) {
                    result.push([nums[i], nums[l], nums[r]]);

                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;

                    l++;
                    r--;
                }
                else if (dif > 0) {
                    r--;
                } else {
                    l++;
                }
            }
        }

        return result;
    }
}
