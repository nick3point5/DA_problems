/**
 * Calculate the number of the island represented by the given map.
 * Land is represented by numbers greater than 0 and water by 0s water is also represented by out of bounds.
 * Islands are land connected horizontally or vertically.
 * Islands are not connected diagonally.
 *
 * @param {number[][]} map - The map representing the island with values indicating land or water.
 * @return {number} The area of the island.
 * @example
 * let map1 = [
 * 	[1]
 * ]
 * countIslands(map1) = 1
 *
 * map2 = [
 * 	[1, 1, 0, 0, 0],
 * 	[1, 1, 0, 0, 0],
 * 	[0, 0, 0, 0, 0],
 * 	[0, 0, 0, 1, 1]
 * ]
 * countIslands(map2) = 2
 *
 * map3 = [
 * 	[2, 1, 0, 0, 5],
 * 	[1, 4, 0, 0, 0],
 * 	[0, 0, 3, 0, 0],
 * 	[0, 0, 0, 1, 1]
 * ]
 * countIslands(map2) = 4
 */
export function countIslands(map: number[][]): number {
	let islands = 0
	const rows = map.length
	const columns = map[0].length

	function depthFirst(row: number, column: number) {
		if (row >= 0 && row < rows && column >= 0 && column < columns && map[row][column] !== 0) {
            map[row][column] = 0

			depthFirst(row - 1, column)
			depthFirst(row + 1, column)
			depthFirst(row, column - 1)
			depthFirst(row, column + 1)
        }
	}

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			const piece = map[row][column]

			if (piece > 0) {
				islands++
				depthFirst(row, column)
			}
		}
	}


	return islands
}