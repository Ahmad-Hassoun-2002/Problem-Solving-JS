// The magic sum of 3s is calculated on an array by summing up odd numbers which include the digit 3.
// Complete the function which accepts an array of integers and returns its magic sum of 3s.
// Example: [3, 12, 5, 8, 30, 13] results in 16 (3 + 13)

const magicSum = numbers => numbers.filter(ele => (ele % 2 != 0 && ele.toString().includes("3"))).reduce((ele1 , ele2) => (ele1 + ele2)? ele1 + ele2 : ele1 ,0);
const magicSum1 = numbers => numbers.reduce((ele1, ele2) => ele1 + (ele2 % 2 && ele2.toString().includes('3') ? ele2 : 0), 0);