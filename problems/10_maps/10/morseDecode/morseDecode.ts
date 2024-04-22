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
export function morseDecode(s: string): string {
    const reversedMap = new Map<string,string>()

    for (const [key, value] of morseMap) {
        reversedMap.set(value, key)
    }


	const encodedWords = s.split(" / ") //split the sentence into seperate words
    const decodedWords = encodedWords.map(word => word.split(" ").map(letter => reversedMap.get(letter)).join("")) //split the morse symbols of the word, set each symbol to a letter, join the letters together to make a word

    return decodedWords.join(" ") //join all the words to the sentence
}
