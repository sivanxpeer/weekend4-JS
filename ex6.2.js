function countNumberOfDuplicates(string){
    let obj={};
    string=string.toLowerCase();
    for(let i=0;i<string.length;i++){
        if(!obj[string[i]]){
            obj[string[i]]=1;
        }
        else{
            obj[string[i]]+=1;
        }
    }
    for(key in obj){
        if(obj[key]===1)
            obj[key]-=1;
    }

    return obj;
}

console.log(countNumberOfDuplicates("ABBA"));
console.log(countNumberOfDuplicates("aA11"));
console.log(countNumberOfDuplicates("indivisibility"));
console.log(countNumberOfDuplicates("Mississippi"));