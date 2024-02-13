/**
 * array has some duplicate elements
 * []
 */

const biriyaniKhor = ['abul', 'babul', 'kobul', 'mokbul', 'nabul', 'abul', 'babul', 'kobul'];
const numbers = [42, 13, 58, 65, 58, 13, 54, 23, 42];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);