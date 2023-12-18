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

const isNumber = (val) => { return val !== undefined && val !== '.' && !isNaN(+val) && isFinite(+val); }
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
        numCells+=2;
    }
    else if(isNumber(arr[row-1][col-1]) && isNumber(arr[row-1][col])) {
        adjCells.push([row-1, col-1]);
        adjCells.push([row-1, col]);
        numCells++;
    }
    else if(isNumber(arr[row-1][col+1]) && isNumber(arr[row-1][col])) {
        adjCells.push([row-1, col+1]);
        adjCells.push([row-1, col]);
        numCells++;
    }
    else if(isNumber(arr[row-1][col+1])){
        adjCells.push([row-1, col+1]);
        numCells++;
    }
    else if(isNumber(arr[row-1][col-1])){
        adjCells.push([row-1, col-1]);
        numCells++;
    }
    else if(isNumber(arr[row-1][col])){
        adjCells.push([row-1, col]);
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
        numCells+=2;
    }
    else if(isNumber(arr[row+1][col-1]) && isNumber(arr[row+1][col])) {
        adjCells.push([row+1, col-1]);
        adjCells.push([row+1, col]);
        numCells++;
    }
    else if(isNumber(arr[row+1][col+1]) && isNumber(arr[row+1][col])) {
        adjCells.push([row+1, col+1]);
        adjCells.push([row+1, col]);
        numCells++;
    }
    else if(isNumber(arr[row+1][col+1])){
        adjCells.push([row+1, col+1]);
        numCells++;
    }
    else if(isNumber(arr[row+1][col-1])){
        adjCells.push([row+1, col-1]);
        numCells++;
    }
    else if(isNumber([row+1][col])){
        adjCells.push([row+1, col]);
        numCells++;
    }

    return { num: numCells, numArray: adjCells };
}

schematicLines = input.split('\n');
for(let i = 0; i < schematicLines.length; i++) {
    for(let j = 0; j < schematicLines[i].length; j++) {
        if(schematicLines[i][j] === '*') {
            const adjCells = checkSurroundingCells(schematicLines, i, j);
            if(adjCells.num === 2) {
                console.log(schematicLines[i][j], ": ", adjCells.num, " ", adjCells.numArray);
                for(let i = 0; i < adjCells.numArray.length; i++) {
                    let cols=adjCells.numArray[i][1];
                    let startingColRight = cols + 1;
                    let lookAhead = schematicLines[adjCells.numArray[i][0]][cols];
                    let leftSideTemp = '';
                    let rightSideTemp = '';
                    console.log(i, " ", cols);
                    if(isNumber(schematicLines[adjCells.numArray[i][0]][cols-1])) {
                        while(isNumber(lookAhead)) {
                            leftSideTemp = lookAhead + '' + leftSideTemp;
                            schematicLines[adjCells.numArray[i][0]][cols] = '.';
                            cols--;
                            lookAhead = schematicLines[adjCells.numArray[i][0][cols]];
                        }
                    }
                    if(isNumber(schematicLines[adjCells.numArray[i][0]][startingColRight])) {
                        lookAhead = schematicLines[adjCells.numArray[i][0]][startingColRight];
                        while(isNumber(lookAhead)) {
                            rightSideTemp = rightSideTemp + '' + lookAhead;
                            schematicLines[adjCells.numArray[i][0]][startingColRight] = '.';
                            startingColRight++;
                            lookAhead = schematicLines[adjCells.numArray[i][0][startingColRight]];
                        }
                    }

                    // sum+=
                }
            }
        }
    }
}

console.log(sum);
