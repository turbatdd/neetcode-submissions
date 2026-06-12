class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {

        let count:number = 0;

        for(let i=0; i <details.length ; i++){
            if(details[i].length == 15){
                
            const age = details[i].substring(11,13);
            console.log(age);

            if(parseInt(age) >60)
                count++;
            }

        }

        return count;
    }
}
