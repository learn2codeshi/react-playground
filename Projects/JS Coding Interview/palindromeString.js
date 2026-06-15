let str = "malayalam"

function isPalindrome(str){
    let reversed = str.split("").reverse().join("")
    // if (str === reversed){
    //     return true
    // } else {
    //     return false
    // }

    return str === reversed
}

console.log(isPalindrome(str));