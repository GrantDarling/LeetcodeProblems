/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const sortedNums = quickSort(nums, 0, nums.length - 1);

    for(let i = 0; i < sortedNums.length; i++) {
        if(sortedNums[i] === sortedNums[i+1]) {
            return true;
        }
    }
    return false;
};

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
const partition = (arr, left, right) => {
    let pivot = arr[Math.floor((left+right)/2)];
    let i = left;
    let j = right;

    while(i <= j) {
        while(arr[i] < pivot) {
            i++;
        }

        while(arr[j] > pivot) {
            j--;
        }
        if(i <= j) {
            swap(arr, i,j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}