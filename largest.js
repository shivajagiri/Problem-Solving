let arr=[1,4,3,5,7];

let max = [0];

for (let i=1; i<arr.length; i++){

    if(arr[i]>max){
        
        max=arr[i];
    }
}

console.log(max)