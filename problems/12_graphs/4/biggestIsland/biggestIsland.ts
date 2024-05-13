/**
 * Calculate the volume of the biggest island represented by the given map.
 * Land is represented by numbers greater than 0 and water by 0s water is also represented by out of bounds.
 * Islands are land connected horizontally or vertically.
 * Islands are not connected diagonally.
 * The volume of an island is the sum of all cells in the island.
 *
 * @param {number[][]} map - The map representing the island with values indicating land or water.
 * @return {number} The area of the island.
 * @example
 * let map1 = [
 * 	[1]
 * ]
 * biggestIsland(map1) = 1
 *
 * map2 = [
 * 	[1, 1, 0, 0, 0],
 * 	[1, 1, 0, 0, 0],
 * 	[0, 0, 0, 0, 0],
 * 	[0, 0, 0, 1, 1]
 * ]
 * biggestIsland(map2) = 4
 *
 * map3 = [
 * 	[2, 1, 0, 0, 10],
 * 	[1, 4, 0, 0, 0],
 * 	[0, 0, 3, 0, 0],
 * 	[0, 0, 0, 1, 1]
 * ]
 * biggestIsland(map2) = 10
 */
export function biggestIsland(map: number[][]): number {
	const rows = map.length
	const columns = map[0].length
	let returnVal = 0

	function depthFirst(row: number, column: number) {
		if (row >= 0 && row < rows && column >= 0 && column < columns && map[row][column] !== 0) {
			let size = map[row][column] //set it to the the number of the piece so if its 10 then the piece adds 10 to the island
			map[row][column] = 0

			size += depthFirst(row - 1, column)
			size += depthFirst(row + 1, column)
			size += depthFirst(row, column - 1)
			size += depthFirst(row, column + 1)

			return size
        }
		return 0 
	}

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			const piece = map[row][column]

			if (piece > 0) {
				const size = depthFirst(row, column)
				if (size > returnVal) {
					returnVal = size
				}
			}
		}
	}

    return returnVal
}
