/* 
Print all numbers
If multiple of 3 => print Fizz
If multiple of 5 => print Buzz
If multiple of 3 AND 5 => print FizzBuzz 
*/
let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "))

    for (let i = 1; i <= answer; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("FizzBuzz")
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else {
            console.log (i)
        }
    }