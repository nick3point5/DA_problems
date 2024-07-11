/**
 * Returns a square pattern of "#" characters with a given side length.
 *
 * @param {number} n - The side length of the square.
 * @return {string} - The square pattern as a string.
 * @example
 * square(1) = "#\n"
 * square(3) = "###\n###\n###\n"
 * square(5) = "#####\n#####\n#####\n#####\n#####\n"
 */
export function square(size: number): string {
	let squareString = ""

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            squareString += "#"
        }

        squareString += "\n"
    }
	
    return squareString
}