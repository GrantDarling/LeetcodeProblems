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

const swap = (items, leftIndex, rightIndex) => {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partition = (items, left, right) => {
    let pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = (arr, left, right) => {
    if(arr.length > 1) {
        let index = partition(arr, left, right);

        if(left < index - 1) {
            quickSort(arr, left, index - 1);
        }

        if(index > right) {
            quickSort(arr, index, right);
        }
    }

    return arr
}