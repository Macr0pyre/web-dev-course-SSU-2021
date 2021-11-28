export function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

export default countVowels;