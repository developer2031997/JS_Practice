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

// const numbers = [3, 5, 1, 9, 2];

// const max = numbers.reduce((acc, curr) => {
//    return curr > acc ? curr : acc
// }, 0);

// console.log(max);

// const numbers1 = [3, 5, 1, 9, 2];

// const sorting = numbers.sort((a, b) => b - a)

// console.log(sorting);

// *************************************************************

// fibbo
// const fibbo = (num) => {
//    const arr = [0, 1];

//    for (let i = 2; i < num; i++) {
//       arr.push(arr[i - 1] + arr[i - 2]);
//       console.log("before arr :", arr)
//    }
//    console.log("after arr :", arr)
// }
// fibbo(20);

//***********************************************************

// const sum = (arr) => {
//    const sum = arr.reduce((acc, curr) => {
//       return acc + curr
//    }, 0)

//    console.log(sum)
// }

// sum([100, 200, 300, -5076, 10000])

// ***********************************************************
// const findSecondLarget = (arr) => {
//    const len = arr.length;
//    let largest = -Infinity;
//    let secondLargest = -Infinity;
//    let thirdLargest = -Infinity;

//    for (let i = 0; i < len; i++) {
//       if (arr[i] > largest) {
//          console.log("entring first...", arr[i])

//          thirdLargest = secondLargest;
//          secondLargest = largest;
//          largest = arr[i]
//       }
//       else if (arr[i] > secondLargest && arr[i] !== largest) {
//          console.log("entring second...", arr[i])

//          thirdLargest = secondLargest;
//          secondLargest = arr[i]
//       }
//       else if (arr[i] > thirdLargest && arr[i] != largest && arr[i] != secondLargest) {
//          console.log("entring third...", arr[i])
//          thirdLargest = arr[i];
//       }
//    }

//    console.log("largest :", largest);
//    console.log("second largest :", secondLargest);
//    console.log("third largest :", thirdLargest);


// }

// findSecondLarget([20, 30, 50, 10, 25, 40, 33, 25]);

// **********************************************************

// find squre in another Array
// const findSquare = (arr1, arr2) => {
//    console.log(arr1)
//    console.log(arr2)

//    for (let i = 0; i < arr1.length; i++) {
//       let square = arr1[i] * arr1[i]

//       if (arr2.includes(square)) {
//          console.log("  square is found !!!", arr1[i], square)
//       }
//    }
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [0, 2, 3, 10, 25];

// findSquare(arr1, arr2)

// **********************************************************

// find duplicate in array
// const findDuplicates = (arr) => {
//    let duplicates = new Set(arr)
//    let second = [];
//    console.log("duplicates :", duplicates)

//    for (let i = 0; i < arr.length; i++) {

//       if (!second.includes(arr[i])) {
//          second.push(arr[i])
//       }
//       if(second.includes(arr[i])){
//          console.log("match....")
//       }
//    }
//    console.log("second :", second);

// }
// findDuplicates([1, 2, 3, 4, 5, 6, 8, 9, 5, 4, 3, 2, 4, 5, 6, 7])

// *************************************************************

// Find the largest and smallest number in an unsorted array of integers

const arr = [10, 2, 3, 4, 100, 1];

const findMaxMin = (arr) => {

   let max = arr[0];
   let min = arr[0];
   console.log("before max :", max)
   console.log("before min :", min)
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i]
      }
      else if (arr[i] < min) {
         min = arr[i]
      }
   }



   console.log("after max :", max)
   console.log("after min :", min)


}
findMaxMin(arr);

// ***************************************************8

const arr1 = [1, 2, 1, 5, 1, 1, 1];
const removeDupes = (arr) => {

   let unique = [];
   let previous = arr[0];
   unique[0] = previous

   for (let i = 0; i < arr.length; i++) {

      if (arr[i] !== previous) {
         unique.push(arr[i]);
      }
      previous = arr[i];
   }
   return unique;

}
console.log(removeDupes(arr1));



function findMinMax(arr2) {
   let min = Math.min(...arr2);  // Spread the array elements into individual arguments
   let max = Math.max(...arr2);  // Spread the array elements into individual arguments

   return [min, max];  // Return an array containing the min and max values
}

// ****************************************************

const arr2 = [5, 3, 9, 1, 7];
console.log(findMinMax(arr2));  // Output: [1, 9]

const arr3 = [5, 3, 9, 1, 7];

const cumulativeSum = (list) => {
   let result = [list[0]];

   for (let i = 1; i < list.length; i++) {
      result.push(list[i] + result[i - 1])
   }
   return result
}
console.log(cumulativeSum(arr3)); // Returns [1, 4, 9, 16]

// **************************************************

const reverseInPlace = (value) => {
   return value.split(" ").reverse().join(" ").split("").reverse().join("");
}
console.log(reverseInPlace('I am a developer'));

//**************************************************
