/********************************************************Valid Palindrome********************************************************/
//Given a string s, return true if it is a palindrome, or false otherwise.

function validPalindrome(s){
let reversed = "";
  for(let i = s.length-1; i >= 0; i--){
    reversed += s[i];
    console.log(reversed)
  }
  return(reversed === s ? true: false)
}
console.log(validPalindrome("racecar"))