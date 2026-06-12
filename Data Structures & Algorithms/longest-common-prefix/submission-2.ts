class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 0) return "";

        let pref: string = "";
        let rIdx = 1;

        while (rIdx <= strs[0].length) {
            pref = strs[0].substring(0, rIdx);

            for (let i = 1; i < strs.length; i++) {
                if (!strs[i].startsWith(pref))
                    return pref.substring(0, rIdx - 1);
            }

            rIdx++;
        }
        return strs[0];
    }
}
