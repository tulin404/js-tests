// Tests referent to the "Function basics" module.

let add7 = (number) => console.log(number + 7);
let multiply = (n1, n2) => console.log(n1 * n2);

function capitalize(string) {
    let lowCasedString = string.toLowerCase();
    let slicedString = lowCasedString.slice(1)
    console.log(lowCasedString[0].toUpperCase() + slicedString);
}

let lastLetter = (arr) => console.log(arr[arr.length - 1])
