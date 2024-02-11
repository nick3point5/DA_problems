/**
 * Sorts an array of numbers in descending order.
 *
 * @param {number[]} array - The array of numbers to be sorted.
 * @return {number[]} - The sorted array in descending order.
 * @example
 * reverseNumberSort([5, 4, 3, 2, 1, 6, 7, 8, 9]); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
 * reverseNumberSort([1, 2, 3, 4, 5, 6, 7, 8, 9]); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
 */
export function reverseNumberSort(array) {
	array.sort((current, next) => next - current)
	return array
}

export function reverseNumberSort2(array) {
	function bubbleSort(array) {
		const length = array.length
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (array[j] < array[j + 1]) {
					swap(array, j, j + 1)
				}
			}
		}

		return array
	}

	function swap(array, i, j) {
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}

	return bubbleSort(array)
}

export function reverseNumberSort3(array) {
	function partition(array, low, high) {
		let pivot = array[high]
		let i = low - 1

		for (let j = low; j <= high - 1; j++) {
			if (array[j] > pivot) {
				i++
				swap(array, i, j)
			}
		}
		swap(array, i + 1, high)
		return i + 1
	}

	function swap(array, i, j) {
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}

	function reverseQuickSort(array, low, high) {
		if (low >= high) return array
		let pivot = partition(array, low, high)

		reverseQuickSort(array, low, pivot - 1)
		reverseQuickSort(array, pivot + 1, high)

		return array
	}

	return reverseQuickSort(array, 0, array.length - 1)
}

export function reverseNumberSort4(array) {
	function reverseMergeSort(array) {
		if (array.length <= 1) {
			return array
		}

		const middle = Math.floor(array.length / 2)
		const left = array.slice(0, middle)
		const right = array.slice(middle)

		return merge(reverseMergeSort(left), reverseMergeSort(right))
	}

	function merge(left, right) {
		const result = []

		while (left.length && right.length) {
			if (left[0] < right[0]) {
				result.push(right.shift())
			} else {
				result.push(left.shift())
			}
		}

		return result.concat(left, right)
	}

	return reverseMergeSort(array)
}

export function reverseNumberSort5(array) {
	function heapSort(array) {
		const length = array.length
		for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
			heapify(array, length, i)
		}

		for (let i = length - 1; i > 0; i--) {
			swap(array, 0, i)
			heapify(array, i, 0)
		}

		return array
	}

	function heapify(array, length, i) {
		const left = 2 * i + 1
		const right = 2 * i + 2
		let largest = i

		if (left < length && array[left] < array[largest]) {
			largest = left
		}

		if (right < length && array[right] < array[largest]) {
			largest = right
		}

		if (largest !== i) {
			swap(array, i, largest)
			heapify(array, length, largest)
		}
	}

	function swap(array, i, j) {
		const temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}

	return heapSort(array)
}
