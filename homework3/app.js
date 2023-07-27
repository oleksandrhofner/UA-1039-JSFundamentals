// task 1

// function compact(){
//     const arr = [5, 3, 4, 5,6,7,3];
//     const newArr = [];
//     for (let i =0; i<arr.length;i++) {
//         console.log(arr[i]);
//     }
//     return newArr;

// }

// console.log("Task 1: ", compact());

// task 2

function createArray(a, b) {
  let arr = [];
  if (a > b) {
    console.log("Wrong numbers");
  } else {
    let num = a;

    while (num <= b) {
      arr.push(num);
      num++;
    }
  }
  return arr;
}

console.log("Task 2: ", createArray(2, 9));

// task 3

function createLongArray(a, b) {
  let arr = [];
  if (a > b) {
    console.log("Wrong numbers");
  } else {
    let num = a;
    while (num <= b) {
      for (let i = 0; i < num; i++) {
        arr.push(num);
      }
      num++;
    }
  }
  return arr;
}

console.log("Task 3: ", createLongArray(2, 9));

// task 4

function Random(k) {
  const min = 1;
  const max = 500;
  let randomArr = [];
  for (let i = 0; i < k; i++) {
    randomArr.push(Math.floor(Math.random() * (max - min) + min));
  }
  return randomArr;
}

console.log("Task 4:", Random(6));

// Task 5

let arr = [
  5,
  "Limit",
  12,
  "a",
  "3",
  99,
  2,
  [2, 4, 3, "33", "a", "text"],
  "strong",
  "broun",
];

function sortType(arr) {
  let newArr = arr;
  let numArr = [];
  let strArr = [];
  // let secArr = newArr[7][0];
  for (let i = 0; i < newArr.length; i++) {
    if (typeof newArr[i] === "number") {
      numArr.push(newArr[i]);
    } else if (typeof newArr[i] === "string") {
      strArr.push(newArr[i]);
    }
  }
  // for (let i = 0; i < secArr.length; i++){
  //   console.log("secArr:", secArr[i]);
  // }

  let allArr = numArr.concat(strArr);
  return allArr;
}

console.log("Task 5:", sortType(arr));

// Task 6

function calc(a, b, op) {
  switch (op) {
    case 1:
      return a - b;
    case 2:
      return a * b;
    case 3:
      return a / b;
    default:
      return a + b;
  }
}

console.log("Task 6:", calc(2, 2, 3));
