
function accum(string){
    // const array = Array(string);
    let res = "";
    
    for(let i=0;i<string.length;i++){
        if(i!=0)
            res+="-";
        res+=string.charAt(i).toUpperCase();
        res+= string.charAt(i).toLowerCase().repeat(i);
    }
    return res;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));