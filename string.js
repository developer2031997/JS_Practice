// function serchString(str, char) {
//     const len = str.length;

//     for (let i = 0; i < len; i++) {
//         if (str[i] === char) {
//             return [str[i], i]
//         }
//     }
// }

// const str = "akshay";
// const char = "h"
// const result = serchString(str, char)

// console.log("result :", result)

// result : [ 'y', 5 ]

// const str = "akshay";
// const char = "y"
// const result = str.indexOf(char)
// result : 5

// ***************************************

// let s = "ababca";
// let c = 'a';

// // Remove all occurrences of 'c' from 's'
// s = s.split(c).join('');

// console.log(s);

//********************************** */

// let s = "ababca";
// let c = 'ca';

// // find index
// s = s.indexOf(c)
// console.log(s);

//********************************** */

// const isPalindrome = (s)=>{
// const reverseS = s.split("").reverse().join("");

// return s === reverseS;

// }
// let s = "lool"
// console.log(isPalindrome(s));

//********************************** */

// // print all substrings 
// const allsubstrings = (s) => {
//     const len = s.length;

//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j <= len; j++) {
//             console.log(s.substring(i, j));
//         }
//     }

// }

// allsubstrings("akshay")

//********************************** */

// print all small and large string 
// const SmallandLarge = (s) => {
//     const str = s.split(" ");
//     let small = str[0];
//     let large = str[0];
//     for (const word of str) {
//         if (word.length < small.length) {
//             small = word;
//         }
//         if (word.length > large.length) {
//             large = word
//                 .split(" ")
//                 .map(char => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase())
//                 .join(" ");
//         }
//     }
//     console.log("small:", small);
//     console.log("large:", large);
// }

// SmallandLarge("akshay aksha dhivare");

// **************************************************************

// const allsubstrings1 = (s) => {
//     const len = s.length;

//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j <= len; j++) {
//             console.log(s.substring(i, j))
//         }
//     }
// }

// allsubstrings1("akshay")

// ***************************************************************

// const numbers = [3, 5, 1, 9, 2];

// const max = numbers.reduce((acc, curr) => {
//     return curr > acc ? curr : acc
// }, 0)

// console.log("max ", max)

// ********************************************************************
// const anagaram = (s, t) => {
//     const ss = s.split("").sort().join("");
//     const tt = t.split("").sort().join("");

//     console.log("ss :",ss)
//     console.log("tt :",tt)

//     if (s.length !== t.length) return false

//     const first = {};
//     const second = {}

//     for (let i = 0; i <= s.length; i++) {
//         first[ss[i]] = (first[ss[i]] || 0) + 1;
//         second[tt[i]] = (second[tt[i]] || 0) + 1;
//     }

//     console.log("first", first)
//     console.log("second", second)
// }
// anagaram("akshay dhivare", "dhivare akshay")

// ***********************************************************************

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Example usage:
// console.log(celsiusToFahrenheit(32));  // 32
// console.log(celsiusToFahrenheit(25)); // 77
// console.log(celsiusToFahrenheit(100)); // 212


// ********************************************

function NonRepeatedChar(value) {
    const charObj = {};
    const singlevalue = []
    for (let v of value) {
        if (v === ' ') continue
        charObj[v] = (charObj[v] || 0) + 1
    }

    for (let char of value) {
        if (charObj[char] === 1) {
            singlevalue.push(char)
        }
    }
    console.log(singlevalue)
    return charObj
}

console.log(NonRepeatedChar("akshay dhivare"));

// **********************************************
const getVowelCount = (sen) => {
    let totalVowels = 0;

    for (let i = 0; i < sen.length; i++) {

        let char = sen[i];

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            totalVowels++;
        }

    }
    return totalVowels
}
console.log("totalVowels is : ", getVowelCount('hello , i am a akshay dhivare'))

