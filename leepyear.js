/**
 * year will a leep year if the divisible by 4
 */


/*Simople logic */
// function isLeapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const isLeep =  isLeapYear(2016);
// console.log(isLeep);



/**
 * 1. those year that is not divisible by 100, if the year is divisible by 4 then it will be a leap year.
 * 2. if the year is divisible by 400, then it is a leap year.
 * 3. else it is not a leap year
 */

// Some thing difficult

function isLeapYear(year) {
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeep =  isLeapYear(2100);
const isLeep2 =  isLeapYear(2400);
const isLeep3 =  isLeapYear(1900);
const isLeep4 =  isLeapYear(2052);
console.log(isLeep, isLeep2, isLeep3, isLeep4);