// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a,b) {

    if (a > b) 
        return a;

    else 
        return b;

}
console.log(maxOfTwoNumbers(10, 3)); 
console.log(maxOfTwoNumbers(2, 5));




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0)
        
     return null;

    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(findLongestWord(words)); 
 

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}
console.log(sumNumbers(numbers));



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {

if (numbers.length === 0) return null;

    let total = sumNumbers(numbers);
    let average = total / numbers.length;

return average;

}

console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(wordsArray, word) {
    if (wordsArray.length === 0) return null;

    for (let w of wordsArray) {
        if (w === word) {
            return true;
        }
    }

    return false;
}

console.log(doesWordExist(words2, "subset")); 
console.log(doesWordExist(words2, "apple"));  
console.log(doesWordExist([], "apple"));    
