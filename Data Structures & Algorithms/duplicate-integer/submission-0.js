class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const list = new Set();
        
        for(const num of nums){
            if(list.has(num)){
                return true;
            }
            list.add(num);
        }

        return false;
    }
}
