let input = prompt("enter your array element that you use in your program")
let arr =  input.split(" ").map(Number)
let myArray = document.getElementById('inputArray')
myArray.innerText = arr
let length = arr.length;

function findEle() {
    let inputValue = parseInt(document.getElementById('element').value);
    let result = document.getElementById('result');

    if (inputValue >= 0 && inputValue < length) {
        result.innerText = "Element at index " + inputValue + " is " + arr[inputValue];
        result.classList.remove("text-red-500");
        result.classList.add("text-green-500");
    } else {
        result.innerText = "Invalid index! Please enter a value between 0 and " + (length - 1);
        result.classList.remove("text-green-500");
        result.classList.add("text-red-500");
    }
}