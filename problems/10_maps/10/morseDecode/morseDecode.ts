import jsonData from "./morseMap.json" with { type: "json" }
const morseMap: Map<string, string> = new Map(Object.entries(jsonData))

/**
 * Decode a Morse code string.
 *
 * @param {string} s - the Morse code string to decode
 * @return {string} the decoded message
 * @example
 * morseDecode("") = ""
 * morseDecode("... --- ...") = "sos"
 * morseDecode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..") = "hello world"
 */
export function morseDecode() {
	return null
}
