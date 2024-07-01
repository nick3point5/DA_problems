/**
 * Calculate the volume of the biggest island represented by the given map.
 * Land is represented by numbers greater than 0 and water by 0s
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
	let maxSize = 0

	function dfs(map: number[][], coordinates: [number, number], currentSize = 0) {
		const [i, j] = coordinates
		if (i < 0 || i >= map.length) return currentSize
		if (j < 0 || j >= map[0].length) return currentSize
		if (map[i][j] === 0) return currentSize

		currentSize += map[i][j]
		map[i][j] = 0
		currentSize = dfs(map, [i + 1, j], currentSize)
		currentSize = dfs(map, [i - 1, j], currentSize)
		currentSize = dfs(map, [i, j - 1], currentSize)
		currentSize = dfs(map, [i, j + 1], currentSize)

		return currentSize
	}

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			if (map[i][j] !== 0) {
				const size = dfs(map, [i, j])
				maxSize = Math.max(maxSize, size)
			}
		}
	}

	return maxSize
}

export function biggestIsland2(map: number[][]): number {
	let maxSize = 0

	function bfs(map: number[][], coordinates: [number, number]) {
		const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
		const q: [number, number][] = [coordinates]
		let size = 0

		while (q.length) {
			const [i, j] = q.shift()!
			for (const [di, dj] of dirs) {
				const row = i + di
				const col = j + dj
				if (
					row < map.length &&
					row >= 0 &&
					col >= 0 &&
					col < map[0].length &&
					map[row][col] > 0
				) {
					q.push([row, col])
				}
			}
			size += map[i][j]
			map[i][j] = 0
		}

		return size
	}

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			if (map[i][j]) {
				const size = bfs(map, [i, j])
				maxSize = Math.max(maxSize, size)
			}
		}
	}

	return maxSize
}
