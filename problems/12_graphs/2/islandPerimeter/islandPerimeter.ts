/**
 * Calculate the perimeter of the island represented by the given map.
 * Land is represented by numbers greater than 0 and water by 0s
 * There is guaranteed to be exactly one island in the map
 *
 * @param {number[][]} map - The map representing the island with values indicating land or water.
 * @return {number} The area of the island.
 * @example
 * let map1 = [
 * 	[5]
 * ]
 * islandArea(map1) = 4
 *
 * map2 = [
 * 	[0, 0, 0, 0, 0],
 * 	[0, 2, 1, 0, 0],
 * 	[0, 0, 1, 0, 0],
 * 	[0, 0, 1, 3, 1]
 * ]
 * islandArea(map2) = 14
 *
 * map3 = [
 * 	[4, 1, 0, 1, 1],
 * 	[1, 1, 2, 1, 0],
 * 	[0, 0, 1, 0, 0],
 * 	[0, 0, 1, 1, 2]
 * ]
 * islandArea(map3) = 24
 */
export function islandPerimeter3(map: number[][]): number {
	const rows = map.length
	let perimeter = 0

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < map[row].length; column++) {
			const piece = map[row][column]

			if (piece > 0) {
				 //first check means that the current piece is the first index, so the left will be out of bounds, second means its 0
                if (column === 0 || map[row][column - 1] === 0) {
					perimeter++
				}
                
				 //first check means that the current piece is the last index, so the right will be out of bounds, second means its 0
                if (column === map[row].length - 1 || map[row][column + 1] === 0) { 
					perimeter++
				}
               
				 //first check means that the current piece is the top row, so up will be out of bounds, second means its 0
                if (row === 0 || map[row - 1][column] === 0) {
					perimeter++
				}
                
				//first check means that the current piece is the bottom row, so down will be out of bounds, second means its 0
                if (row === rows - 1 || map[row + 1][column] === 0) {
					perimeter++
				}
            }
		}
	}

	return perimeter
}
