
function accum(string) {
    let res = "";
    for (let i = 0; i < string.length; i++) {
            if (String(string).match(/[^a-zA-Z]/)){
                return "ivalid input";
            }
            if (i != 0)
                res += "-";
            res += string.charAt(i).toUpperCase();
            res += string.charAt(i).toLowerCase().repeat(i);
        }
        return res;
    }


console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
console.log(accum("cwAt231"));