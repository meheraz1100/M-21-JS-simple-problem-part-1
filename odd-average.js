/**
 * function takes array as a parameter 
 * give me the average of odd numbers in the array
 */


/**
 * 1. put odd numbers into an array
 */
function oddAverage(numbers){    // function
    const odds = [];
    for(const number of numbers){  //  loop
        if(number % 2 === 1){          // condition
            // console.log(number);
            odds.push(number);
        }
    }

    // odds is the array that contains the odd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    console.log('The sum of the odd numbers is : ', sum);
    const len = odds.length;
    const average = sum / len;
    console.log('The average of the odd numbers is : ', average);
    return average;
}
const numbers = [42, 13, 58, 65, 81, 96, 7, 5, 105];
const average = oddAverage(numbers);
console.log('The odd numbers are : ', numbers);