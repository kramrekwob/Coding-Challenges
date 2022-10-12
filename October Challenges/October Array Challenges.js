//check for deep equality of array
function deepEqualityArray(arr1, arr2) {
   return (JSON.stringify(arr1) === JSON.stringify(arr2));
};

//Move left and Move right functions for a single dimensional array
//mine was wrong- heres correct one found with help
function moveLeft (arr, value) {
    // determine current index of value
    let index = arr.indexOf(value)
    // check if already 0
    if (index === 0) {
        console.log('No change');
        return arr
    // if index is not 0
    } else {
        // hold the value that is being moved to the right
        let swapped = arr[index-1]
        // move the value to the left
        arr[index-1] = value
        // set the replaced value to the right
        arr[index] = swapped
    }
    console.log(arr);
    return arr
}

function moveRight (arr, value) {
    // determine current index of value
    let index = arr.indexOf(value)
    // check if already at end of arr
    if (index === arr.length-1) {
        console.log('No change');
        return arr
    // if index is not at end
    } else {
        // hold the value that is being moved to the right
        let swapped = arr[index+1]
        // move the value to the right
        arr[index+1] = value
        // set the replaced value to the right
        arr[index] = swapped
    }
    console.log(arr);
    return arr
}
//day3 
/*takes in a given array of strings and move any entries containing the letter 'a' to the front
then move any remaining entries that have over 3 characters to the back
please preserve the relative order of entries within their given category
*/
function sortAsAndThrees(arr){
    //initialize 3 empty arrays
    let array1 = [];
    let array2 = [];
    let array3 = [];
    for (let i = 0 ; i < arr.length ; i++ ){
        //first conditional if it contains a put it in array1
        if ( arr[i].includes('a')) {
        array1.push(arr[i]);
        }
        //second conditional
        else if (arr[i].length > 3){
        array2.push(arr[i])
        }
        //otherwise letter is back of the queue and goes in array3 category
        else array3.push(arr[i]);
    //return 3 arrays concatenated
    };
    return [...array1, ...array3, ...array2];
}
//day4
/* takes in a 2 dimensional array, a grid, so each subarray has the same length as the overall array
    Takes in a parameter for a value that only appears ONCE in the entire grid, 
    Require one function (move up) and one function (move down) that swap it upper or down the grid
    If it can't move up or down, no change. */
function moveUp(array, value) {
    // intialize coordinates, letter to be swapped;
    let xCoordinate = 0;
    let yCoordinate = 0;
    let letterToBeSwapped = '';
    //find coordinates
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] === value) {
                xCoordinate = j;
                yCoordinate = i;
            }
        }
    }
    //if y coordinate is 0, cannot move up, return unmutated array;
    if (yCoordinate === 0) return array;
    //else store the value of the letter to be swapped
    letterToBeSwapped = array[yCoordinate - 1][xCoordinate];
    //splice the value one y coordinate up, deleting previous value
    array[yCoordinate - 1].splice(xCoordinate, 1, value);
    //splice the value at original coordinates, deleting previous value
    array[yCoordinate].splice(xCoordinate, 1, letterToBeSwapped)
    return array;
}
function 