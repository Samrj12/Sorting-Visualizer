export function mergeSort(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

//BUBBLE SORT
export function bubbleSort(array){
    const animations = [];
    let length = array.length -1;
    for(let i =0;i<= length; i++)
    {
        for(let j = 0; j< length - i; j++)
        {
            animations.push([j,j + 1]);
            animations.push([j,j + 1]);
            if(array[j] > array[j + 1])
            {
                animations.push([j,array[j + 1]]);
                animations.push([j+1, array[j]]);
                let k = array[j];
                array[j] = array[j + 1];
                array[j + 1] = k;
            }
            else{
                animations.push([j, array[j]]);
                animations.push([j + 1,array[j + 1]]);
            }
        }
    }
    return animations;
}

//QUICK SORT
export function quickSort(array)
{
    const animations = [];
    let length = array.length - 1;
    quickSortHelper(array, animations, 0, length);
    return animations;
}

function quickSortHelper(array, animations, startIdx, endIdx)
{
    if(startIdx >= endIdx ) return;
    let pivotIdx = doQuickSortMerge(array, animations, startIdx, endIdx)
    quickSortHelper(array, animations, startIdx, pivotIdx - 1);
    quickSortHelper(array, animations, pivotIdx + 1, endIdx);
}

function doQuickSortMerge(
    array,
    animations,
    startIdx,
    pivotIdx,
){
    //Value we use for comparing our array elements
    let pivotValue = array[pivotIdx];
    //Index for swapping array values
    let k = startIdx;
    for(let j= startIdx; j<= pivotIdx - 1; j++)
    {
        animations.push([j, pivotIdx]);
        animations.push([j, pivotIdx]);
        if(array[j] < pivotValue)
        {
            animations.push([j, array[k], true]);
            animations.push([k, array[j], true]);
            swap(array, k , j);
            k++;
        }
        else{
            animations.push([j, array[j]]);
            animations.push([j, array[j]]);
        }
    }
    animations.push([k, pivotIdx]);
    animations.push([k, pivotIdx]);
    animations.push([k, array[pivotIdx]]);
    animations.push([pivotIdx, array[k]]);
    swap(array, k , pivotIdx);
    return k;
}

function swap(array, i1, i2)
{
    let temp = array[i1];
    array[i1] = array[i2];
    array[i2] = temp;
}

//Insertion SORT
export function insertionSort(array)
{
    const animations = [];
    let size = array.length;
    //sorting code
    for(let n = 1;n<size;n++)
    {
        let k = array[n];
        let idx = n - 1;
        animations.push([n, idx, 0]);//0 signifies comparison animations
        animations.push([n, idx, 0]);
        while(idx>= 0 && k < array[idx])
        {
            animations.push([idx + 1, array[idx], 1]); //1 signifies swap animations
            array[idx + 1] = array[idx];
            idx--;
            if(idx >= 0)
            {
            animations.push([n, idx, 0]);//0 signifies comparison animations
            animations.push([n, idx, 0]);
            }
            else{
                animations.push([idx + 1, n, 0]);//0 signifies comparison animations
                animations.push([idx + 1, n, 0]);//This addition does not mean a comparison
                //but in order to maintain our triplet of animation elements, we need to add it
            }
        }
        animations.push([idx + 1, k, 1]);
        array[idx + 1] = k;
    }
    //
    return animations;
}