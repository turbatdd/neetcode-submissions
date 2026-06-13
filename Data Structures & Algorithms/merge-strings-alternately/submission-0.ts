class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1: string, word2: string): string {
        let res: string[] = [];

        let l = word1.length;
        let r = word2.length;
        let i = 0;
        let j = 0;

        while (i < l || j < r) {
            if (i < l) {
                res.push(word1[i]);
                i++;
            }

            if (j < r) {
                res.push(word2[j]);
                j++;
            }
        }

        return res.join("").replace(",", "");
    }
}
