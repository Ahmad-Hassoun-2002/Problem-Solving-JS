// We search non-negative integer numbers, with at most 3 digits, such as the sum of the cubes of their digits is the number itself; we will call them "cubic" numbers.
// 153 is such a "cubic" number : 1^3 + 5^3 + 3^3 = 153
// These "cubic" numbers of at most 3 digits are easy to find, even by hand, so they are "hidden" with other numbers and characters in a string.
// The task is to find, or not, the "cubic" numbers in the string and then to make the sum of these "cubic" numbers found in the string, if any, and to return a string such as:
// "number1 number2 (and so on if necessary) sumOfCubicNumbers Lucky" 
// if "cubic" numbers number1, number2, ... were found.
// The numbers in the output are to be in the order in which they are encountered in the input string.
// If no cubic numbers are found return the string: `"Unlucky"``.

function isSumOfCubes(s){
    const num = (s.match(/\d+/g) || []).flatMap(n => n.match(/.{1,3}/g));
    let counter = 0;
    let sum = "";
    for(let i = 0 ; i < num.length ; i++){
        let count = 0;
        for(let j = 0 ; j < num[i].length ; j++){
            count += Math.pow(parseInt(num[i][j]) , 3);
        }
        if(count === parseInt(num[i])){
            sum += String(Number(num[i])) + " ";
            counter += count;
        }
    }
    return sum == "" ? `Unlucky` : `${sum}${counter} Lucky`;
}

// OR 

function isSumOfCubes2(s) {
    let a = (s.match(/\d+/g) || []).flatMap(n => n.match(/.{1,3}/g));
    let r = a.filter(x => [...x].reduce((s, d) => s + d ** 3, 0) == x);
    return r.length ? `${r.map(n => +n).join(" ")} ${r.reduce((s, n) => s + +n, 0)} Lucky` : "Unlucky";
}

// OR

const isSumOfCubes3 = s => (arr => arr.length && `${arr.join(` `)} ${arr.reduce((pre, val) => pre + val, 0)} Lucky` || `Unlucky`)
(s.match(/\d{1,3}/g).filter(val => [...val].reduce((pre, v) => pre + v ** 3, 0) == val).map(Number));
