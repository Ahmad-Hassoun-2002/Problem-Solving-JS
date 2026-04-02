// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
// For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

const str = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}
const encode = string => [...string].map(ele => str[ele]? str[ele] : ele).join("");
const decode = string => [...string].map(ele => {
    const found = Object.entries(str).find(([, value]) => value == ele);
    return found ? found[0] : ele;
}).join("");


// OR

// turn vowels into numbers
function encode2(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode2(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}