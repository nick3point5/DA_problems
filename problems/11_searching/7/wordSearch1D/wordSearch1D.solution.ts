/**
 * A function that searches for a word in a 1D board.
 *
 * @param {string[]} board - the 1D board to search in
 * @param {string} word - the word to search for
 * @return {number} the index of the word in the board, -1 if not found
 * @example
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "world") = 6
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "hello") = 0
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "foo") = -1
 * wordSearch1D(["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"], "") = -1
 */
export function wordSearch1D(board: string[], word: string): number {
	if (word === "") {
		return -1
	}
	const board_str = board.join("")
	for (let i = 0; i < board.length; i++) {
		if (board_str.substring(i, i + word.length) === word) {
			return i
		}
	}

	return -1
}
