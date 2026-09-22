class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people: number[], limit: number): number {
        let result = 0;
        let l = 0;
        let r = people.length - 1;

        people.sort((a, b) => a - b);

        // [1,3,2,3,2]
        // limit=3
        // 1,2,2,3,3

        while (l <= r) {
            if (people[l] + people[r] <= limit) {
                l++;
            }

            r--;
            result++;
        }

        return result;
    }
}
