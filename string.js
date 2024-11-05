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

// print all substrings 
const allsubstrings = (s) => {
    const len = s.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
           console.log(s.substring(i, j));
        }
    }

}

allsubstrings("akshay")

