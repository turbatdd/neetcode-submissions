class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let sIndex = 0;
        let tIndex = 0;
        let found = 0;

        while (sIndex < s.length && tIndex < t.length) {
            const s1 = s.charAt(sIndex);
            const s2 = t.charAt(tIndex);

            if (s1 == s2) {
                sIndex++;
                found++;
            }

            tIndex++;
        }

        return found == s.length;
    }
}
