class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let result: number[] = [];

        for (let i = 0; i < numbers.length; i++) {
            const iVal = numbers[i];

            for (let j = 1; j < numbers.length; j++) {
                if (iVal + numbers[j] == target) {
                    result.push(i+1);
                    result.push(j+1);
                    return result;
                }
            }
        }

        return result;
    }
}
