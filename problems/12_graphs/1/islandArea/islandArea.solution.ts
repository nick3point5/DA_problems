/**
 * Calculate the area of the island represented by the given map.
 * Land is represented by numbers greater than 0 and water by 0s
 * There is guaranteed to be exactly one island in the map
 *
 * @param {number[][]} map - The map representing the island with values indicating land or water.
 * @return {number} The area of the island.
 * @example
 * let map1 = [
 * 	[5]
 * ]
 * islandArea(map1) = 1
 *
 * map2 = [
 * 	[5, 1, 0, 0, 0],
 * 	[1, 2, 1, 0, 0],
 * 	[0, 0, 1, 0, 0],
 * 	[0, 0, 1, 3, 1]
 * ]
 * islandArea(map2) = 9
 *
 * map3 = [
 * 	[4, 1, 0, 1, 1],
 * 	[1, 1, 2, 1, 0],
 * 	[0, 0, 1, 0, 0],
 * 	[0, 0, 1, 1, 2]
 * ]
 * islandArea(map3) = 12
 */
export function islandArea(map: number[][]): number {
	let area = 0
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j] !== 0) {
				area++
			}
		}
	}

	return area
}
