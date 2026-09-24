class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack:string[] = [];
        let closeBrackets:Record<string,string> = {
            "}":"{",
            "]":"[",
            ")":"("
        }

        for(let c of s){
            if(stack.length > 0 && closeBrackets[c]){
                const prev = stack.pop();
                
                if(prev !== closeBrackets[c]){
                    return false;
                }
            }else{
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
