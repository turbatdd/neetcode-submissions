class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows: number): number[][] {
        let res: number[][] = Array.from({ length: numRows }, (_, i) => Array(i + 1).fill(1));
        console.log(res);
        
    //     0 1 2 3 4 
    //  0  1
    //  1  1 1
    //  2  1 2 1
    //  3  1 3 3 1
    //  4  1 4 6 4 1

        for(let i=2; i<numRows;i++){
            for(let j =1;j<i;j++){
                res[i][j] = res[i-1][j-1] +res[i-1][j];
            }
        }

        return res;
    }
}
