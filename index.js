let arr = [];
        
// data store karne ke liye 
function storeArray() {
    let input = document.getElementById("arrayInput").value;
    // condition check krne ke liye input value empty na ho isliye 
    if (input.length >0) {
      arr = input.split(" ");
    updateArrayDisplay();
    }else{
      alert("please insert element in array ")
    }
}
 // array update karne ke liye according to user requirement 
function updateArrayDisplay(highlightIndex = -1) {
    let myArray = document.getElementById('inputArray');
    myArray.innerHTML = "Stored Array: " + arr.map((ele, index) => {
        return `<span class="${index === highlightIndex ? 'bg-yellow-300 px-2' : ''}">${ele}</span>`;
    }).join(", ");
}
// index number ka use karke array ele find karne ke liye 
function findEle() {
    let inputValue = parseInt(document.getElementById('element').value); //select input value 
    let result = document.getElementById('result'); //for print array finding ele using index 

     //condition add ki hai agr input value number nhi h to 
    if (isNaN(inputValue)) {
        result.innerText = "Please enter a valid number!";
        result.classList.add("text-red-500");
        return;
    }
    
    if (inputValue >= 0 && inputValue < arr.length) {
        result.innerText = "Element at index " + inputValue + " is " + arr[inputValue];
        result.classList.remove("text-red-500");
        result.classList.add("text-green-500");
        updateArrayDisplay(inputValue);
    } else {
        result.innerText = "Invalid index! Please enter a value between 0 and " + (arr.length - 1);
        result.classList.remove("text-green-500");
        result.classList.add("text-red-500");
        updateArrayDisplay();
    }
    document.getElementById('element').value = "";
}

function resetArray() {
    arr = [];
    document.getElementById('inputArray').innerText = "";
    document.getElementById('result').innerText = "";
    document.getElementById('element').value = "";
    document.getElementById('arrayInput').value = "";
}