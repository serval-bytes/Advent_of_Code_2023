const input= `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`


const isNumber = (val) => { return val !== undefined && !isNaN(+val) && isFinite(+val); }
let sum = 0;

const checkSurroundingCells = (arr, row, col) => {
    const adjCells = [];
    let numCells = 0;

    if(isNumber(arr[row][col-1])) {
        adjCells.push([row, col-1]);
        numCells++;
    }
    if(isNumber(arr[row][col+1])) {
        adjCells.push([row, col+1]);
        numCells++;
    }

    if(isNumber(arr[row-1][col]) && isNumber(arr[row-1][col+1]) && isNumber(arr[row-1][col-1])) {
        adjCells.push([row-1, col]);
        adjCells.push([row-1, col+1]);
        adjCells.push([row-1, col-1]);
        numCells++;
    }
    else if(isNumber(arr[row-1][col+1]) && isNumber(arr[row-1][col-1])) {
        adjCells.push([row-1, col+1]);
        adjCells.push([row-1, col-1]);
        numcells+=2;
    }
    else {
        adjCells.push([row-1][col]);
        numCells++;
    }
    if(isNumber(arr[row+1][col]) && isNumber(arr[row+1][col+1]) && isNumber(arr[row+1][col-1])) {
        adjCells.push([row+1, col]);
        adjCells.push([row+1, col+1]);
        adjCells.push([row+1, col-1]);
        numCells++;
    }
    else if(isNumber(arr[row+1][col+1]) && isNumber(arr[row+1][col-1])) {
        adjCells.push([row+1, col+1]);
        adjCells.push([row+1, col-1]);
        numcells+=2;
    }
    else {
        adjCells.push([row+1][col]);
        numCells++;
    }

    return { num: numCells, numArray: adjCells };
}

schematicLines = input.split('\n');
for(let i = 0; i < schematicLines.length; i++) {
    for(let j = 0; j < schematicLines[i].length; j++) {
        if(!isNumber(schematicLines[i][j]) && schematicLines[i][j] != '.') {
            if(checkSurroundingCells(schematicLines, i, j).num === 2) {
                console.log(schematicLines[i][j]);
            }
        }
    }
}

console.log(sum);
