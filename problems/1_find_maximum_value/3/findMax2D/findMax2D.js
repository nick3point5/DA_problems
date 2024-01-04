/**
 * Finds the maximum value in a 2D array.
 *
 * @param {number[][]} array - The 2D array to search.
 * @return {number} - Returns the maximum value in the array. Returns null if the array is empty..
 */
export function findMax2D(array) {

	
    var maxNumber = null
  
    for (let i = 0; i < array.length; i++) {
        var row = array[i]
       
        for(let j = 0; j < row.length; j++) {
            if (row[j] > maxNumber || maxNumber == null) {
                maxNumber = row[j]
            }
        }
        

    }
    return maxNumber

}
