// Here are five boxes, each of them is not the same weight(a,b,c,d,e). We don't know their weight, but we know the weight of every two boxes,such as a+b,c+d,a+c,etc... Their order is chaotic, we don't know which one is b+c or a+e or c+d...
// Hint: Some things can be inferred, for example: the total weight of the lightest two boxes must be the minimum value of the array. In the same way, the total weight of the heaviest two boxes must be the maximum value of the array.
// Please find out what is the weight of the heaviest box. This does not require sophisticated programming skills, only need to think carefully ;-)
// Task
// Complete function heaviestBox() that accepts a argument weightOfEachTwoBoxes. It's a list of the weight of each two boxes.
// You need to calculate the weight of the heaviest box and return an integer value.
// Examples
// heaviestBox([113,116,110,117,112,118,114,121,120,115]) === 62 
// heaviestBox([143,158,123,115,108,171,151,143,136,128]) === 93
// heaviestBox([156,147,119,135,180,152,123,168,140,164]) === 96

function heaviestBox2(weightOfEachTwoBoxes){
    let arr = weightOfEachTwoBoxes.sort((e , b) =>  e - b);
    console.log(arr);
    let s1 = arr[0];
    let s2 = arr[1];
    let s3 = arr[2];

    let total = s1 + s2 + s3;
    let a = (s1 + s2 - s3) / 2;
    let b = (s1 + s3 - s2) / 2;
    let c = (s2 + s3 - s1) / 2;

    // let a = Math.round(((s1 + s2 + s3) / 2) - s3);
    // let b = Math.round(((s1 + s2 + s3) / 2) - s2);
    // let c = Math.round(((s1 + s2 + s3) / 2) - s1);
    console.log(a);
    console.log(b);
    console.log(c);
    let array2 = [];
    for(let i = 3 ; i < arr.length ; i++){
        let a2 = arr[i] - a;
        let b2 = arr[i] - b;
        let c2 = arr[i] - c;
        if(a2 != b && a2 != c){
            if(!array2.includes(a2)){
                array2.push(a2);
            }
        }
        if(b2 != a && b2 != c){
            if(!array2.includes(b2)){
                array2.push(b2);
            }
        }
        if(c2 != a && c2 != b){
            if(!array2.includes(c2)){
                array2.push(c2);
            }
        }
    }
    let ai = array2.sort((a , b) => a - b);
    console.log(ai);
    for(let i = 0; i < ai.length; i++){
        for(let j = i + 1; j < ai.length; j++){
            if((ai[i] + ai[j] === arr[arr.length - 1]) && (ai[i] > c)){
                if(arr.includes(ai[i] + c) && arr.includes(ai[j] + c) && arr.includes(ai[i] + b) && arr.includes(ai[j] + b)){
                    console.log(ai[i]);
                    return ai[j];
                }
            }
        }
    }
}

// OR

function heaviestBox(weights){
    weights.sort((a,b) => a-b)
    let allSum = weights.reduce((s,v) => s+v) / 4
    return weights[8] + weights[9] + weights[0] - allSum
}
