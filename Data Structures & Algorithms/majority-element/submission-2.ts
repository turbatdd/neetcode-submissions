class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        
        if(nums== null || nums.length ==0)
            return -1;

        if(nums.length == 1)
            return nums[0];

        let map:Map<number,number> = new Map();
        
        

        for(let i=0;i<nums.length; i++){
            if(!map.get(nums[i])){
                map.set(nums[i],1);
            }else{
                const cur = map.get(nums[i]);

                if(cur+1 > i/2)
                    return nums[i];

                map.set(nums[i],cur+1);
            }
        }
         

    }
}
