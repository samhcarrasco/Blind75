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

// two pointer solution

function palindrome(s){
  let p1 = 0;
  let p2 = s.length-1

  while(p1 < p2){
    if(s[p1] !== s[p2]){
      return false
    }
    p1++
    p2--
  }
  return true
}
console.log(palindrome("moom"))