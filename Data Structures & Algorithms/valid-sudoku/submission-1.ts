class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Map<number, Set<string>>();
        const cols = new Map<number, Set<string>>();
        const boxes = new Map<number, Set<string>>();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const value = board[r][c];

                if (value === ".") continue;

                const box = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                console.log(box);

                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!boxes.has(box)) boxes.set(box, new Set());

                if (
                    rows.get(r)!.has(value) ||
                    cols.get(c)!.has(value) ||
                    boxes.get(box)!.has(value)
                ) {
                    return false;
                }

                rows.get(r)!.add(value);
                cols.get(c)!.add(value);
                boxes.get(box)!.add(value);
            }
        }

        return true;
    }
}
