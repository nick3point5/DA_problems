import jsonData from "./morseMap.json" with { type: "json" }
const morseMap: Map<string, string> = new Map(Object.entries(jsonData))

/**
 * Translates a given string into Morse code.
 *
 * @param {string} s - the input string to be translated
 * @return {string} the resulting Morse code
 * @example
 * morseCode("sos") = "... --- ..."
 * morseCode("hello") = ".-.-.---..-.--."
 * morseCode("SOS") = "... --- ..."
 * morseCode("HELLO") = ".-.-.---..-.--."
 */
export function morseCode(s: string): string {
	return s.toLowerCase().split("").map((letter) => morseMap.get(letter)).join(" ")
	//lowercase the word, split all the letters, map each letter to morse code, join all the letters
}
