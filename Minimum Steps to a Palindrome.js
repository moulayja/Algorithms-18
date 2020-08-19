
/*

Given an incomplete palindrome as a string, return the minimum letters needed to be added on to the end to make the string a palindrome.

Examples
minPalindromeSteps("race") ➞ 3
// Add 3 letters: "car" to make "racecar"

minPalindromeSteps("mada") ➞ 1
// Add 1 letter: "m" to make "madam"

minPalindromeSteps("mirror") ➞ 3
// Add 3 letters: "rim" to make "mirrorrim"
Notes
Trivially, words which are already palindromes should return 0.

*/

function minPalindromeSteps(str) {
	let rev = [...str].reverse().join(""), i = str.length;
	while (!str.endsWith(rev.slice(0, i))) i--;
	return str.length - i;
}
