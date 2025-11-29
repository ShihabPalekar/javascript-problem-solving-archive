//Solution 1
const isPalindrome = (str) => {
    if (!str?.length) return null
    let reversedStr = str.trim().split("").reverse().join("")
    return str === reversedStr
}


//Solution 2
const isPalindrome2 = (str) => {
    if (!str?.length) return null;

    const clean = str.trim().toLowerCase();
    const reversed = clean.split("").reverse().join("");
  
    return clean === reversed;  
}