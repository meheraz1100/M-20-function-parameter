/**
 * Objective : write a function to give sum of number of an array
 * step -1 declare a function
 * step -2 call check whether the function is called properly
 * step -3 pass a parameter to the function
 * step -4 pass the parameter(s) and check whether in check proper format
 * step -5 do the function task
 */

function sumOfNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    } 
    return sum;
}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumber(numbs);
console.log("Sum of number is : ", sum);

