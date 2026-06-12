class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let map1: Map<string, number> = new Map();

        if (s.length != t.length) return false;

        let sort1 = s.split('').sort().join();
        let sort2 = t.split('').sort().join();

        return sort1 == sort2;
    }
}
