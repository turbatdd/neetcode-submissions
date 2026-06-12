class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs == null || strs.length == 0) return [[""]];

        const grouped = new Map<string, string[]>();

        for (let str of strs) {
            let key = str.split("").sort().join("");

            if (!grouped.has(key)) {
                grouped.set(key, [str]);
            } else {
                grouped.set(key, [...grouped.get(key), str]);
            }
        }

        return Array.from(grouped.values());
    }
}
