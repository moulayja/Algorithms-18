
/*
An island is a region of contiguous ones. A contiguous one is a 1 that is touched by at least one other 1, either horizontally, vertically or diagonally. Given a piece of the map, represented by a 2-D array, create a function that returns the area of the largest island.

To illustrate, if we were given the following piece of the map, we should return 4.

[
  [0, 0, 0],
  [0, 1, 1],
  [0, 1, 1]
]
Our function should yield 2 for the map below:

[
  [1, 0, 0],
  [0, 0, 1],
  [0, 0, 1]
]
Our function should yield 4 for the map below: :

[
  [1, 0, 0],
  [0, 1, 1],
  [0, 0, 1]
]
Examples
largestIsland([
  [1, 0, 0], 
  [0, 0, 0], 
  [0, 0, 1]
])

➞ 1

largestIsland([
  [1, 1, 0], 
  [0, 1, 1], 
  [0, 0, 1]
])

➞ 5

largestIsland([
  [1, 0, 0], 
  [1, 0, 0], 
  [1, 0, 1]
])

➞ 3
Notes
Maps can be any m x n dimension.
Maps will always have at least 1 element. m >= 1 and n >= 1.
*/

function largestIsland(map) {
	let currentMaximumIslandArea = 0;
	for (let  i = 0 ;  i< map.length ; i++){

		for (let k = 0; k < map[i].length; k++){
			computeIslandArea.memoized = [];
			let currentIslandArea = computeIslandArea(i , k , map);
			if (currentIslandArea > currentMaximumIslandArea){
				currentMaximumIslandArea = currentIslandArea;
			}
		}
	}
	return currentMaximumIslandArea;
}

function computeIslandArea(row , col , islandsMap){
	let containsArr =  computeIslandArea.memoized.reduce((acc , arr) => acc || (arr[0] === row && arr[1] === col),
		                                                  false);
	if ((islandsMap[row] === undefined) || 
		 (islandsMap[row][col] === undefined) || 
		 containsArr ||
		 islandsMap[row][col] === 0){
		return 0;
	}
	else {
		computeIslandArea.memoized = computeIslandArea.memoized.concat([[row , col]]);
		let leftTile = computeIslandArea(row , col+1 , islandsMap);
		let downTile = computeIslandArea(row+1 , col , islandsMap);
		let diagonalDownTile = computeIslandArea(row+1  , col+1 , islandsMap);
		return 1+leftTile + downTile + diagonalDownTile;
	}
}

