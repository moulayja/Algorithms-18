
/*
Create a function that gets every pair of numbers from an array that sums up to eight and returns it as an array of pairs (pair sorted ascendingly) collated into an object. See the following examples for more details.

Examples
sumsUp([1, 2, 3, 4, 5]) ➞ {"pairs": [[3, 5]]}

sumsUp([10, 9, 7, 2, 8]) ➞ {"pairs": []}

sumsUp([1, 6, 5, 4, 8, 2, 3, 7]) ➞ {"pairs": [[2, 6], [3, 5], [1, 7]]}
// [6, 2] first to complete the cycle (to sum up to 8)
// [5, 3] follows
// [1, 7] lastly
// [2, 6], [3, 5], [1, 7] sorted according to cycle completeness, then pair-wise
Notes
Remember the idea of "completes the cycle first" when getting the sort order of pairs.
Only unique numbers are present in the array.

*/

function sumsUp(arr) {
    let res = [];
    arr.forEach((i, idx) => {
        if (arr.slice(0, idx).includes(8 - i)) {
            res.push([8-i, i].sort());
        }
    });
    return {'pairs': res};
}
