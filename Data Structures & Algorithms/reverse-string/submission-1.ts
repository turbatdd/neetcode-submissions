class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s: string[]): void {
        if (s == null || s.length == 0) return;

        const mid: number = Math.floor(s.length / 2);
        const length = s.length - 1;

        for (let i = 0; i < mid; i++) {
            const temp = s[i];
            s[i] = s[length - i];
            s[length - i] = temp;
        }
    }
}
