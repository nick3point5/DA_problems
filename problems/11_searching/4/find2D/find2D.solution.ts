/**
 * Finds the target value in a 2D matrix.
 *
 * @param {number[][]} matrix - The 2D matrix to search.
 * @param {number} target - The value to find in the matrix.
 * @return {[number, number] | null} - Returns the coordinates [row, column] of the target value in the matrix. Returns null if the target value is not found.
 * @example
 * find2D([
 * 	[1, 2, 3],
 * 	[4, 5, 6],
 *  [7, 8, 9]
 * ], 5) => [1, 1]
 * find2D([
 * 	[1, 2, 3],
 * 	[4, 5, 6],
 *  [7, 8, 9]
 * ], 3) => [0, 2]
 * find2D([
 * 	[1, 2, 3],
 * 	[4, 5, 6],
 *  [7, 8, 9]
 * ], 10) => null
 */
export function find2D(matrix: number[][], target: number) {
	for (let i = 0; i < matrix.length; i++) {
		const row = matrix[i]
		for (let j = 0; j < row.length; j++) {
			if (row[j] === target) {
				return [i, j]
			}
		}
	}
	return null
}
