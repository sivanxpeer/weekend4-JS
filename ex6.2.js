function countNumberOfDuplicates(string){
    let arr=string.split("").sort();    
    let res={};
    for(let i=0;i<arr.length;i++){
        if(!res[arr[i]]){
            res[arr[i]]=0;
        }
        else if(res[arr[i]]===0){
            res[arr[i]]++;
        }
    }
    return res;

}

console.log(countNumberOfDuplicates("ABBA"));
console.log(countNumberOfDuplicates("aA11"));
console.log(countNumberOfDuplicates("indivisibility"));