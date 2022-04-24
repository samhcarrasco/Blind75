
/********************************************************Valid Anagram********************************************************/
 var isAnagram = function(s, t) {
  let hash = {};
  if(s.length !== t.length)return false
  for(let character of s){
    if (hash[character]){
      hash[character] += 1
    }
    if(!hash[character]){
      hash[character] = 1
    }
  }

  for(let character of t){
    if(!hash[character]){
      return false
    }
    hash[character] -= 1
  }
  return true
 };
 console.log(isAnagram("chinos","sinoch"));

