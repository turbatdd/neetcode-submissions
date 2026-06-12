class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        const arr = s.trim().split(" ");

        if(arr.length > 0)
        {
            return arr[arr.length-1].length;
        }

        return 0;

    }
}
