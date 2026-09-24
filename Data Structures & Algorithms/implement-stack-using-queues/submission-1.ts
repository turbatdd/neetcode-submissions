class MyStack {
    private q: number[];

    constructor() {
        this.q = [];
    }

    
    push(x: number): void {
        this.q.push(x);
        let size = this.q.length;
        // Rotate the previous elements to the back of the queue
        while (size > 1) {
            this.q.push(this.q.shift());
            size--;
        }
    }

    pop(): number {
        return this.q.shift();
    }

    top(): number {
        return this.q[0];
    }

    empty(): boolean {
        return this.q.length === 0;
    }
}
/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
