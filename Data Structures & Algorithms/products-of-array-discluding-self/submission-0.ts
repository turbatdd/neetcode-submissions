class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            let val:number = nums.filter((_,idx)=> idx!=i).reduce((v1,v2)=>v1*v2);

            res.push(val);

        }
        return res;
    }
}
