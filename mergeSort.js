// merge sort function 
function mergeSort(array) {

    console.log("This was printed recursively");

    // Base case
    if (array.length <= 1) {
        return array;
    }

    // Splitting the array in half to merge sort (as it's a single array that we feed in)
    const splitArray = array.length / 2;

    // Merging the arrays into two seperate arrays
    const left = array.slice(0, splitArray);
    const right = array.slice(splitArray);

    // Merging the two using an additional function
    return mergeArrays(mergeSort(left), mergeSort(right));
}

// Function to merge the two arrays that we split
function mergeArrays(leftArray, rightArray) {
    // Stores array
    let resultArray = [];

    // Tracking index numbers
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && 
        rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            resultArray.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }
    if (leftArray[leftIndex]) {
        let unadded = leftArray.slice(leftIndex);
        resultArray.push(...unadded);
    } else {
        let unadded = rightArray.slice(rightIndex);
        resultArray.push(...unadded);
    }
    return resultArray;
}

console.log(mergeSort([8, 10, 12, 66, 50604, 500, 100, 1, 1, 4, 6]));