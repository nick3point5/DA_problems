export function rightTriangle(size: number):string {
	let triangle = ""

	for (let i = 1; i <= size; i++) {
		triangle += "#".repeat(i)
		triangle += " ".repeat(size-i)

		if (i < size) {
			triangle += "\n"
		}
	}

	return triangle
}