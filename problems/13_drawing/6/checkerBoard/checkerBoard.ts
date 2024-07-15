/**
 * Generates a checkerboard pattern with the specified height and width.
 *
 * @param {number} height - The height of the checkerboard.
 * @param {number} width - The width of the checkerboard.
 * @return {string} - The checkerboard pattern as a string.
 * @example
 * checkerBoard(1, 1) =>
 * """
 * 	###\n
 * 	#X#\n
 * 	###\n
 * """
 * checkerBoard(1, 3) =>
 * """
 * 	#########\n
 * 	#X##O##X#\n
 * 	#########\n
 * """
 * checkerBoard(3, 3) =>
 * """
 * 	#########\n
 * 	#X##O##X#\n
 * 	#########\n
 * 	#########\n
 * 	#O##X##O#\n
 * 	#########\n
 * 	#########\n
 * 	#X##O##X#\n
 * 	#########\n
 * """
 */
export function checkerBoard(height: number, width: number): string {
	let board = ""
	let xoro = 0

    for (let i = 0; i < height; i++) {
		board += "#".repeat(width*3) + "\r\n#"

        for (let j = 0; j < width; j++) {
			board += (xoro%2===0 ? "X" : "O") + (j === width-1 ? "#" : "##")
			
			xoro++
        }
        board += "\r\n" + "#".repeat(width*3) + "\r\n"
	}

    return board
}
