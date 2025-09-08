/* This test gets an array, checks if every number inside of it is even and, if it is,
it triplicates it and add to the total sum */

// Initializates the sum global variable.
let sum = 0;

// A function that coverts any received text to a NUMBERS ARRAY.
function convertToArray (text) {
    // This is a regex that separates both commas and whitespaces. The .split() returns an array. 
    let userArray = text.split(/[\s,]+/);
    // The function stores the new array when called.
    return userArray.map(Number);
};

// Runs the everything. Doen't have parameters because it performs an action.
function submit () {
    // Get the value typed by the user in the input.
    let userNumbers = document.getElementById("userInput").value;
    // Converts the previous value to an array.
    let newArray = convertToArray(userNumbers);
    /*Uses a map on that newArray that, by using an arrow function, checks if the number
    is even. If it is, it triplicates the number, if not, it returns 0.*/
    let multipliedEven = newArray.map(num => num % 2 === 0 ? num * 3 : 0);
    /*Okay, this method is a tricky one. The .reduce() uses a callback function where
    the first parameter of the function is always the accumulator, meaning that every
    iteration this first value will accumulate. The second parameter is the value that keeps
    changing every iteration. For example, if we have [2, 4, 6], the accumulator will be
    2, 6 and 10, while the current would be 2, 4 and 6. The second value is the initial value.*/
    sum += multipliedEven.reduce((accumulator, current) => accumulator + current, 0);
    console.log(sum);

    // Resets the sum and clears the input.
    document.getElementById("userInput").value = "";
    sum = 0;
};

// Assigns the submit function to the btn when clicked.
document.getElementById("btn").addEventListener("click", submit);