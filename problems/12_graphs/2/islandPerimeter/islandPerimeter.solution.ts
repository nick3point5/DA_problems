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
export function islandPerimeter(map: number[][]): number {
	let perimeter = 0
	for (let x = 0; x < map.length; x++) {
		for (let y = 0; y < map[x].length; y++) {
			perimeter += perimeterOne(x, y)
		}
	}

	function perimeterOne(x: number, y: number) {
		if (map[x][y] === 0) return 0
		const left = x > 0 ? map[x - 1][y] : 0
		const right = x < map.length - 1 ? map[x + 1][y] : 0
		const down = y > 0 ? map[x][y - 1] : 0
		const up = y < map[x].length - 1 ? map[x][y + 1] : 0

		let result = 0
		if (left === 0) result++
		if (right === 0) result++
		if (down === 0) result++
		if (up === 0) result++

		return result
	}

	return perimeter
}

export function islandPerimeter2(map: number[][]): number {
	function findFirstLand(map: number[][]) {
		for (let i = 0; i < map.length; i++) {
			for (let j = 0; j < map[i].length; j++) {
				if (map[i][j] > 0) {
					return [i, j]
				}
			}
		}
	}

	function getNeighbors(coordinates: [number, number], map: number[][]) {
		const [i, j] = coordinates
		const neighbors: [number, number][] = []

		if (!isWater([i - 1, j], map)) {
			neighbors.push([i - 1, j])
		}
		if (!isWater([i + 1, j], map)) {
			neighbors.push([i + 1, j])
		}
		if (!isWater([i, j - 1], map)) {
			neighbors.push([i, j - 1])
		}
		if (!isWater([i, j + 1], map)) {
			neighbors.push([i, j + 1])
		}
		return neighbors
	}

	function isWater(coordinates: [number, number], map: number[][]) {
		const [i, j] = coordinates
		if (i < 0 || i >= map.length || j < 0 || j >= map[i].length) {
			return true
		}
		return map[i][j] === 0
	}

	function calculateSinglePerimeter(coordinates: [number, number], map: number[][]) {
		const [i, j] = coordinates
		let perimeter = 0
		if (isWater([i - 1, j], map)) {
			perimeter++
		}
		if (isWater([i + 1, j], map)) {
			perimeter++
		}
		if (isWater([i, j - 1], map)) {
			perimeter++
		}
		if (isWater([i, j + 1], map)) {
			perimeter++
		}

		return perimeter
	}

	function calculatePerimeter(map: number[][]) {
		let perimeter = 0

		const firstLand = findFirstLand(map)

		const queue = [firstLand]
		const visited = new Set<string>()

		while (queue.length > 0) {
			const [i, j] = queue.shift()!

			if (visited.has(`${i},${j}`)) {
				continue
			}

			visited.add(`${i},${j}`)

			perimeter += calculateSinglePerimeter([i, j], map)

			const neighbors = getNeighbors([i, j], map)

			queue.push(...neighbors)
		}

		return perimeter
	}

	return calculatePerimeter(map)
}

export function islandPerimeter3(map: number[][]): number {
	let perimeter = 0
	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[i].length; j++) {
			if (map[i][j] > 0) {
				let onePerimeter = 4
				if (map[i][j - 1] > 0) {
					onePerimeter--
				}
				if (map[i][j + 1] > 0) {
					onePerimeter--
				}
				if (i + 1 < map.length) {
					if (map[i + 1][j] > 0) {
						onePerimeter--
					}
				}
				if (i - 1 >= 0) {
					if (map[i - 1][j] > 0) {
						onePerimeter--
					}
				}
				perimeter += onePerimeter
			}
		}
	}
	return perimeter
}
