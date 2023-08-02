// Task 1

// const arr = [2, 5, 10, 3, 4, 3, 7, 2];
// function sumSliceArray(arr, first, second) {
//   try {
//     const firstNum = first;
//     const secondNum = second;
//     if (typeof firstNum && typeof secondNum !== "number"){
//         throw new SyntaxError("first number and second number can`t include string");
//     }
//     if (arr[firstNum] > arr.length || arr[secondNum] > arr.length) {
//         throw new SyntaxError("number is too long");
//     }
    
//     return Math.floor(Number(arr[firstNum]) + Number(arr[secondNum]));

//   } catch (error) {
//     console.log("Hmm, we have error... : ", error);
//     return 0;
//   }
// }

// console.log("sumSlice:", sumSliceArray(arr, 3, 7));

// Task 2

//   const userName = prompt("What`s your name?");
//   const userAge = prompt("How old are you?");
//   const userStatus = prompt("Your status?");
// function checkAge(userName,userAge,userStatus) {
//   try {
//     if (userName === "" || userAge === "" || userStatus === "") {
//       throw new Error("The field is empty! Please enter your age!");
//     }
//     if (userAge < 18 || userAge > 70) {
//       throw new RangeError("Age must be correct");
//     }
//     if (userStatus === "Admin" || userStatus === "Moderator" || userStatus === "User") {
//       console.log("You can watch films");
//     } else {
//     throw new EvalError("Must be: Admin, Moderator or User");

//     }

//       return console.log(`Welcome, ${userName}, you are ${userAge} old, your status is ${userStatus}!`);
    
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// checkAge(userName,userAge,userStatus);

// Task 3

// function calcRectangleArea(width,height) {
//   try {
//     if (typeof width && typeof height !== "string") {
//       return width*height;
//     } else {
//       throw new EvalError("Input correct width and height");
//     }
//   } catch (error) {
//     console.log("Error: ", error);
//   }
// }

// console.log("Area is:",calcRectangleArea(20,10));


// Task 4


