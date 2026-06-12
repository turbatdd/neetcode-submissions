class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {

        let count:number = 0;

        for(let str of details){
            if(str.length == 15){
                
            const age = str.substring(11,13);
            console.log(age);

            if(parseInt(age) >60)
                count++;
            }

        }

        return count;
    }
}
