class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;

        const sList = s.split('').sort().join();
        const tList = t.split('').sort().join();

        return sList == tList;
    }
}
