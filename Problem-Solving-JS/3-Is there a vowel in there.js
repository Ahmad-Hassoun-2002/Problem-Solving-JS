// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

function isVow(a){
    let s = a.map((ele) => {
        return /[aeiou]/.test(String.fromCharCode(ele))? String.fromCharCode(ele) : ele;
    });
    return s // your code here
}

console.log(isVow([100,100,116,105,117,121]));

// OR

function isVow2(a){
    let s = a.map((ele) => {
        return ["a", "e", "i", "o", "u"].includes(String.fromCharCode(ele))? String.fromCharCode(ele) : ele;
    });
    return s // your code here
}

console.log(isVow2([100,100,116,105,117,121]));

// OR

const isVow3 = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

console.log(isVow3([100,100,116,105,117,121]));

// OR

const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow4=a=>a.map(x=>v[x]||x);

console.log(isVow4([100,100,116,105,117,121]));