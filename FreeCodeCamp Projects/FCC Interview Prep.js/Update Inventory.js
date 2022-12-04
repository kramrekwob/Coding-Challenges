function updateInventory(arr1, arr2) {
    // set up names of existing items
    let itemNames = [];
    for (let i = 0; i < arr1.length; i++) {
        itemNames.push(arr1[i][1])
    }
    // compare new deliveries to existing items
    arr2.forEach(newItem => {
        // if it is a new item, add to existing
        if (!itemNames.includes(newItem[1])) arr1.push(newItem)
        // if it is an old item, update the inventory count
        else {
            let index = itemNames.indexOf(newItem[1]);
            arr1[index][0] += newItem[0];
        }
    }
    )
    // sort the inventory by name
    arr1.sort((a, b) => {
        if (a[1] > b[1]) return 1
        else if (a[1] < b[1]) return -1
        else return 0;
    });
    // return arr1
    return arr1
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);