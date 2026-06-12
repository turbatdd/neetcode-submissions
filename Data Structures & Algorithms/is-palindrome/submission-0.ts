class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        let l: number = 0;
        let r: number = s.length - 1;

        console.log(s);

        while (l < r) {
            if (s[l] != s[r]) return false;

            l++;
            r--;
        }

        return true;
    }
}
