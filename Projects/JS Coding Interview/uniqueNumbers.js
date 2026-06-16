let arr =[1,2,3,4,5,1,2,3,6,7,8,9,10];

function uniqueNumbers(arr) {
    let uniqueArr=[]
    for(let i = 0; i<arr.length;i++){
        for (let j = i+1; j<arr.length;j++){
            if(arr[i]===arr[j]){
                break;
            }   
            else if(j===arr.length-1){
                uniqueArr.push(arr[i]);
            }   
        }
    }
    return uniqueArr;
}

console.log(uniqueNumbers(arr));

// print only unique numbers from the array. In this case, the output will be [4,5,6,7,8,9,10]

// remove duplicates from the array and return only unique numbers. In this case, the output will be [1,2,3,4,5,6,7,8,9,10]

// print only duplicates or repeated elements from the array. In this case, the output will be [1,2,3]