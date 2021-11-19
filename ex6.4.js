
function isIsogram(string){
    if(string ==="")
        return true;

    let array = string.toLowerCase().split("");
    array.sort();

    for(let i=0;i<array.length;i++){
        if(array[i]===array[i+1])
            return false;
    }
    return true;
}


console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));