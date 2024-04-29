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
	let index = 0 
	let answer = -1
	word.split("")

	for (let i = 0; i < board.length; i++) {
		if (board[i] === word[index]) {
			if (index === 0) {
				answer = i
			} else if (board[i - 1] !==  word[index - 1]) {
				answer = -1
			}
			
			index++
		}
	}

	return answer
}
