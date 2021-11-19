function longest(s1, s2) {
    if (typeof(s1)!==typeof("")||!s1||!s2) {
        return "ivalid input";
    }

    let newString = "";
    let both = s1 + s2;
    both = both.split("").sort();
    
    for (let i = 0; i < both.length; i++) {
        if (!newString.includes(both[i]))
            newString += both[i];
    }
    return newString;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest(32444, "hihi"));
console.log(longest(32444, ""));
console.log(longest("", "wafdsf"));
