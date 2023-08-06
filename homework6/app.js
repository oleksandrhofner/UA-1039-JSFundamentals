// Task 1

const list = document.querySelector("#list");

const firstElement = list.firstElementChild;
console.log("first element:", firstElement.textContent);

const lastElement = list.lastElementChild;
console.log("last element:", lastElement.textContent);

const secondElement = firstElement.nextElementSibling;
console.log("second element:", secondElement.textContent);

const fourthElement = lastElement.previousElementSibling;
console.log("fourth element:", fourthElement.textContent);

const thirdthElement = list.childNodes[5];
console.log("third element:", thirdthElement.textContent);

console.log(
  `All elements:  ${firstElement.textContent},${lastElement.textContent},${secondElement.textContent},${fourthElement.textContent},${thirdthElement.textContent}`
);
