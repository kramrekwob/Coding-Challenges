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
    let array12 = array1.concat(array2);
    let array123 = array12.concat(array3);
    return array123;
    };
}