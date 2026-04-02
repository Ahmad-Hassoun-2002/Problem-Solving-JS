// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.

const findUniq2 = arr => arr.reduce((ele1 , ele2 , ind) => (ele1 !== ele2 && ele1 !== arr[ind + 1] && arr[ind + 1] !== undefined)? ele1 : ele2);
console.log(findUniq2([1 , 1 , 1  , 1 , 1 , 0]));

const findUniq = arr => arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));