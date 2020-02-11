// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    if(myString.length > 1){
        let mySubstring = myString.substring(1, myString.length)
        printString(mySubstring)
    }else{
        return true
    }
}

function reverseString(string) {
    // console.log(string[string.length - 1])
    if(string.length < 2 ){
        return string
    }else{
        return reverseString(string.substring(1)) + string[0]
    }
}

function isPalindrome(s){
    let l = s.length;
    if(l < 2){
        return true;
    }else if(s[l -1] === s[0]){
        return isPalindrome(s.substring(1, l-1))
    }else{
        return false
    }
}

function addUpTo(arr, i){
    return i ? arr[i] + addUpTo(arr, --i) : arr[i]
}

function maxOf(arr){
    if(arr.length === 1){
        return arr[0]
    }else{
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, num) {
    if(!arr.length){
        return false;
    }else if(arr[0] === num){
        return true
    }else{
        return includesNumber(arr.slice(1), num)
    }
}