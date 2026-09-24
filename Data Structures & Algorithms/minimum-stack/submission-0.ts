class MinStack {
    st: number[];
    minSt: number[];
    constructor() {
        this.st = [];
        this.minSt = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.st.push(val);

        if (this.minSt.length === 0 || val <= this.getMin()) this.minSt.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        const pVal = this.st.pop();

        if (pVal === this.getMin()) this.minSt.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.st[this.st.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minSt[this.minSt.length - 1];
    }
}
