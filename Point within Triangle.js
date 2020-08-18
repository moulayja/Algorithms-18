
/*

Create a function that takes four pairs. The first three are (x, y) coordinates of three corners of a triangle.
Return true if the fourth tuple — the (x, y) coordinates of a test point — lies within the triangle, false if it doesn't.

Examples
withinTriangle([1, 4], [5, 6], [6, 1], [4, 5]) ➞ true

withinTriangle([1, 4], [5, 6], [6, 1], [3, 2]) ➞ false

withinTriangle([-6, 2], [-2, -2], [8, 4], [4, 2]) ➞ true
Notes
Pairs are given as arrays of length two.

*/

function withinTriangle(p1, p2, p3, t) {
	return s_side(p1,p2,p3,t) && s_side(p3,p1,p2,t) && s_side(p2,p3,p1,t)
}

function s_side(a,b,p,q){
	let P = (b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0])
	let Q = (b[0]-a[0])*(q[1]-a[1])-(b[1]-a[1])*(q[0]-a[0])
	return P*Q > 0
}
