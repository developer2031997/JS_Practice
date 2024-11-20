const removeVowels = (value) => {
    const len = value.length;
    let result = "";

    // first method 
    for (let i = 0; i < len; i++) {

        if (value.charAt(i) === 'A' || value.charAt(i) === 'E' || value.charAt(i) === 'I' || value.charAt(i) === 'O' || value.charAt(i) === 'U' || value.charAt(i) === 'a' || value.charAt(i) === 'e' || value.charAt(i) === 'i' || value.charAt(i) === 'o' || value.charAt(i) === 'u') {
            continue;
        }

        console.log(value.charAt(i))
    }

    // second method 
    const vowels = "AEIOUaeiou"

    for (let i = 0; i < len; i++) {

        if (!vowels.includes(value[i])) {
            result = result + value[i];
        }

    }
    console.log("results :", result)

    // using RegExp
    return value.replace(/[AEIOUaeiou]/g, '')

}


const result = removeVowels("akshay")

console.log("result", result);
