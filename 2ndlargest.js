let arr= [1,4,3,2,8,4,6];

let max= arr[0];

let smax= arr[0]

for(let i=1; i<arr.length; i++){

    if(arr[i]>max){
        max=arr[i];
    }
}

for(let i=1; i<arr.length; i++){

    if(arr[i]>smax && arr[i]<max){

        smax=arr[i]
    }

}

console.log(smax)


