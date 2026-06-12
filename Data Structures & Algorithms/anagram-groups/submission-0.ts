class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs == null || strs.length == 0) return [[""]];

        
        let result: string[][] = [];
        let skipIdx: number[]=[];

        for (let i = 0; i < strs.length; i++) {

            if(skipIdx.includes(i)) continue;
            
            let arr: string[] = [];
            let cur = strs[i].split("").sort().join("");

            arr.push(strs[i]);
            skipIdx.push(i);

            for (let j = i + 1; j < strs.length; j++) {
                let cur2 = strs[j].split("").sort().join("");

                if (cur === cur2 && !skipIdx.includes(j)) {
                    arr.push(strs[j]);
                    skipIdx.push(j)
                }
            }
            result.push(arr);
        }

        return result;
    }
}
