/**
 * Calculate the number of the island represented by the given map.
 * Land is represented by numbers greater than 0 and water by 0s
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
	function dfs(map: number[][], coordinates: [number, number]) {
		const [i, j] = coordinates
		if (i < 0 || i >= map.length) return
		if (j < 0 || j >= map[0].length) return
		if (map[i][j] === 0) return

		map[i][j] = 0
		dfs(map, [i + 1, j])
		dfs(map, [i - 1, j])
		dfs(map, [i, j - 1])
		dfs(map, [i, j + 1])
	}

	let result = 0

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			if (map[i][j] !== 0) {
				result++
				dfs(map, [i, j])
			}
		}
	}

	return result
}

export function countIslands2(map: number[][]): number {
	function bfs(coordinates: [number, number]) {
		const [i, j] = coordinates
		const queue: [number, number][] = []
		visit.add(`${i},${j}`)
		queue.unshift([i, j])

		while (queue.length > 0) {
			const [i, j] = queue.shift()!
			const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
			for (let k = 0; k < direction.length; k++) {
				const [dx, dy] = direction[k]
				const x = i + dx
				const y = j + dy

				if (visit.has(`${x},${y}`)) continue
				if (x < 0 || x >= rows) continue
				if (y < 0 || y >= columns) continue
				if (map[x][y] === 0) continue

				queue.unshift([x, y])
				visit.add(`${x},${y}`)
			}
		}
	}

	if (map.length === 0) return 0

	const rows = map.length
	const columns = map[0].length

	const visit = new Set()
	let result = 0

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			if (map[i][j] > 0 && !visit.has(`${i},${j}`)) {
				bfs([i, j])
				result++
			}
		}
	}

	return result
}
