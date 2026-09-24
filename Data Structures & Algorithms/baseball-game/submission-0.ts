class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let stack: number[] = [];

        for (let i = 0; i < operations.length; i++) {
            const s = operations[i];
            if (s === "+") {
                const sum = stack[stack.length - 1]+ stack[stack.length - 2];
                stack.push(sum);
            } else if (s === "C") {
                stack.pop();
            } else if (s === "D") {
                const mult = stack[stack.length - 1] * 2;
                stack.push(mult)
            } else {
                stack.push(parseInt(s));
            }
        }

        console.log(stack);
        const res = stack.reduce((a,b)=> a+b,0);

        return res;
    }
}
