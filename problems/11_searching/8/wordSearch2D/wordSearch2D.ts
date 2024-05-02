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
export function wordSearch2D(board: string[][], word: string): [number, number] | null {
	const rows = board.length
	const columns = board[0].length

	for (let row = 0;  row < rows; row++) {
		//loop through all the rows
		for (let column = 0; column < columns; column++) {
			//loop through all the columns 
			let foundHorizontal = true
            let foundVertical = true

			//check if the current column has the word
            for (let i = 0; i < word.length; i++) {
                if (column + i >= columns || board[row][column + i] !== word[i]) { //check if the next column exists or if the next letter is the same as the word
                    foundHorizontal = false //if not then set it to false because the word isnt there in the horizontal
                    break
                }
            }

			//check if the word is there vertical
            for (let i = 0; i < word.length; i++) { 
                if (row + i >= rows || board[row + i][column] !== word[i]) { //check if the next row exists or if the letter in the same position of the next row is the same as the word
                    foundVertical = false //if not then set to false because there isn't a word in the vertical
                    break
                }
            }

            if (foundHorizontal) {
				return [row, column] //if the horizontal is not false return
			}
            if (foundVertical) {
				return [row, column] //if the vertical is not false return
			}
		}
	}

	return null //if both are false return null
}
