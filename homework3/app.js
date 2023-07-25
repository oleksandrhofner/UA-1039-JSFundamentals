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

function createArray(a,b) {
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

console.log("Task 2: ", createArray(2,9));

// task 3

function createLongArray(a,b) {
    let arr = [];
    if (a > b) {
        console.log("Wrong numbers");
    } else {
        let num = a;
        while (num <= b) {
            for (let i = 0; i<num; i++) {
                arr.push(num);
            }
            num++;
        }
    }
    return arr;
}

console.log("Task 3: ", createLongArray(2,9));

// task 4

function Random(k) {
    const min = 1;
    const max = 500;
    let randomArr = [];
    for (let i=0; i <k;i++) {
        randomArr.push(Math.floor(Math.random()*(max-min)+min));
    }
    return randomArr;
}

console.log("Task 4:", Random(6));

// Task 5




