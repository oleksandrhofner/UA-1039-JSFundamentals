// Task 1

const arr = [2, 5, 10, 3, 4, 3, 7, 2];
function sumSliceArray(arr, first, second) {
  try {
    const firstNum = first;
    const secondNum = second;
    if (typeof firstNum && typeof secondNum !== "number"){
        throw new SyntaxError("first number and second number can`t include string");
    }
    if (arr[firstNum] > arr.length || arr[secondNum] > arr.length) {
        throw new SyntaxError("number is too long");
    }
    
    return Math.floor(Number(arr[firstNum]) + Number(arr[secondNum]));

  } catch (error) {
    console.log("Hmm, we have error... : ", error);
    return 0;
  }
}

console.log("sumSlice:", sumSliceArray(arr, 3, 7));

// Task 2

