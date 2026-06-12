class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let count:number = 0;
        let cur: number = 0;

        for(let num of nums){
            if(num == 1)
                count++;
            else
                count = 0;

            if(cur< count)
                cur = count;
        }

        return cur;
    }
}
