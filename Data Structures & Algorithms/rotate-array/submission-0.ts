class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums: number[], k: number): void {
        // nums=[1, 2, 3, 4, 5, 6, 7]
        // nums=[ 3, 4, 5, 6, 7, 1, 2]


        const dif = k % nums.length;

        const reverse = (l,r)=>{
            while(l<r){
                [nums[l], nums[r]] = [nums[r], nums[l]];
                l++;
                r--;
            }
        }

        reverse(0,nums.length-1);
        reverse(0,dif-1);
        reverse(dif,nums.length-1);
    }
}
