// function findMaximunElement(arr) {
//     let max = arr[0];
//     const len = arr.length;

//     for (let i = 0; i < len; i++) {
//         console.log(i,arr[i])

//         if (arr[i] < max) {
//             max = arr[i]
//             console.log("max :",max)
//         }
//     }

//     return max;
// }
// const result = findMaximunElement([4,5,8,2,1,4,6,3,2,0,-4])

// ***************************************************************

// function sumarray(arr) {
//    // let sum = 0;
//    // const len = arr.length;

//    // for (let i = 0; i < len; i++) {
//    //    //   console.log(i,arr[i])
//    //    sum = sum + arr[i]
//    // }

//    // return sum;

//    return arr.reduce((acc, num) => acc + num, 0);
// }
// const result = sumarray([4, 5, 8, 2, 1, 4, 6, 3, 2])

// console.log("result :", result)

// ***************************************************************

// function reverseString(arr) {
//     const str = arr.split("").reverse().join("");
//     return str;
// }
// const result = reverseString("akshay dhivare mumbai")

// ***************************************************************


// function firstCharCap(arr) {
//     // const str = arr.split(" ");

//     const cap = arr.map((char)=> char.charAt(0).toUpperCase()+char.slice(1).toLowerCase())
//     return cap.join(" ");
// }
// const result = firstCharCap(["asSSSSSkshTTTTTTTTay", "dhivare" ,"mumbai"])

// function longestStrings(arr) {
//     let maxWord = arr[0];
//     let maxlen = arr[0].length

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > maxlen) {
//             console.log(maxWord, maxlen)
//             maxWord = arr[i];
//             maxlen = arr[i].length
//             console.log(maxWord, maxlen)
//         }
//     }

//     return [maxWord, maxlen];
// }
// const result = longestStrings(["akshay", "dhivareeeee", "mumbaieeeeeeeeeeeeeeeee"])

// ***************************************************************


// function factorial(arr) {
//     if (arr < 0) return undefined; // Handle negative input

//     // Base case for factorial
//     if (arr === 0 || arr === 1) return 1;

//     // Calculate factorial iteratively
//     let res = 1;
//     for (let i = 2; i <= arr; i++) {
//         res *= i; // Compute factorial iteratively
//     }

//     // Calculate factorial recursively
//     let res1 = factorial(arr - 1); // This will compute factorial recursively

//     // Log results for clarity (optional)
//     console.log("res (iterative):", res);
//     console.log("res1 (recursive):", res1);

//     // Return both results; res1 is already the factorial of arr - 1
//     return [res, res1]; // res1 is correctly calculated as arr! for arr - 1
// }
// const result = factorial(5);
// console.log("result:", result); // This will print the final result

// ***************************************************************


// function newReverseArr(arr) {
//    const arr1= [...arr].reverse()

//    return arr1;
// }
// const originalArray = [1,2,3,4,5]
// console.log("originalArray :", originalArray)

// const reversedArray  = newReverseArr(originalArray)

// console.log("originalArray :", originalArray)
// console.log("reversedArray :", reversedArray)

// ***************************************************************

// function removeDuplicate(arr) {
//    const arr1= new Set(arr)
//    const aar2 = Array.from(arr1);

//    return aar2;
// }
// const originalArray = [1,2,3,3,3,3,34,4,4,4,4,22,2,2,2,2,21,1,1,1,1,1,4,5]
// console.log("originalArray :", originalArray)

// const reversedArray  = removeDuplicate(originalArray)

// console.log("reversedArray :", reversedArray)

// ***************************************************************

// function findCommonValue(arr1, arr2) {
//    const arrr1 = new Set(arr1)
//    const arrr2 = new Set(arr2)
//    // const aar1 = Array.from(arrr1);
//    // const aar2 = Array.from(arrr2);
//    const common = [];

//    // using array
//    // for (const i of aar1) {
//    //    if (aar2.includes(i)) {
//    //       common.push(i)
//    //    }
//    // }
//    // return common;

//    // using set 
//    for (const i of arrr1) {
//       if (arrr2.has(i * i)) {
//          common.push(i, i * i)
//       }
//    }
//    return common
// }

// const arr1 = [1, 2, 3, 3, 3, 3, 34, 4, 4, 4, 4, 4, 5];
// const arr2 = [1, 2, 9, 3, 3, 3, 34, 4, 4, 4, 4, 22];

// const reversedArray = findCommonValue(arr1, arr2);

// console.log("reversedArray :", reversedArray)

// ***************************************************************


const numbers = [3, 5, 1, 9, 2];

const max = numbers.reduce((acc, curr) => {
   return curr > acc ? curr : acc
}, 0);

console.log(max);

const numbers1 = [3, 5, 1, 9, 2];

const sorting = numbers.sort((a, b) => b-a)

console.log(sorting);

