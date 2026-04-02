let arr2 = [2 , 4 , -200 , 5 , 2 , 8 , -80 , -9];

console.log(arr2.reduce((ele , ele2) =>( ele > 0 && ele2 > 0) ? ele += ele2 : ele));

// OR 

let positiveSum = (arr => {
    let count = 0;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            count += arr[i];
            }
        }
        return count;
    }
);

console.log(positiveSum(arr2));