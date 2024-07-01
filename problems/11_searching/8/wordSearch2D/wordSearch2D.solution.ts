/**
 * Finds a word in a given word search board. Word are read from left to right and top to bottom.
 *
 * @param {string[][]} board - The word search board.
 * @param {string} word - The word to search for.
 * @returns {[number, number]} - The coordinates [row, column] of the word in the board. Returns null if the word is not found.
 * @example
 * const board = [
		["A", "B", "O", "W"],
		["S", "F", "C", "S"],
		["A", "D", "A", "M"],
		["E", "E", "T", "E"],
	]
	wordSearch2D(board, "BOW") => [0, 1]
	wordSearch2D(board, "SEE") => null
	wordSearch2D(board, "CAT") => [1, 2]
 */
export function wordSearch2D(board: string[][], word: string) {
	function lookRight(board: string[][], word: string, coordinates: [number, number]) {
		const [i, j] = coordinates
		if (word.length > board[i].length - j) {
			return false
		}

		for (let k = 0; k < word.length; k++) {
			const char = board[i][j + k]

			if (char !== word[k]) {
				return false
			}
		}

		return true
	}

	function lookDown(board: string[][], word: string, coordinates: [number, number]) {
		const [i, j] = coordinates
		if (word.length > board.length - i) {
			return false
		}

		for (let k = 0; k < word.length; k++) {
			const char = board[i + k][j]

			if (char !== word[k]) {
				return false
			}
		}

		return true
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === word[0]) {
				if (
					lookRight(board, word, [i, j]) ||
					lookDown(board, word, [i, j])
				) {
					return [i, j]
				}
			}
		}
	}

	return null
}
