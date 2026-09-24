class MyQueue {
    inStack: number[];
    outStack: number[];

    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.inStack.push(x);
    }

    /**
     * @return {number}
     */
    pop(): number {
        if(this.outStack.length ===0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop());
            }
        }

        return this.outStack.pop();
    }

    /**
     * @return {number}
     */
    peek(): number {
         if(this.outStack.length ===0){
            while(this.inStack.length>0){
                this.outStack.push(this.inStack.pop());
            }
        }
        return this.outStack[this.outStack.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
