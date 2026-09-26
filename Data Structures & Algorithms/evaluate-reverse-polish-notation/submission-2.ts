class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let res = 0;
        let stack: number[] = [];

        res = parseInt(tokens[0]);

        //["1","2","+","3","*","4","-"]


        for (let i = 0; i < tokens.length; i++) {
            const cur = tokens[i];
            if (cur === "*") {
                res = res * parseInt(tokens[i + 1]);
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b * a);
            } else if (cur === "/") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b/a));
            } else if (cur === "-") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b-a);
            } else if (cur === "+") {
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b+a);
            } else {
                stack.push(parseInt(tokens[i]));
            }
        }

        return stack.pop();
    }
}
