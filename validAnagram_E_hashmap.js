
/********************************************************Valid Anagram********************************************************/
 var isAnagram = function(s, t) {
  const hash = {};
  console.log(hash)
  if(s.length !== t.length)return false
  for(let character of s){
    if (hash[character]){
      hash[character] += 1
      console.log(hash)
    }
    if(!hash[character]){
      hash[character] = 1
      console.log(hash)
    }
  }
  for(let character of t){
    if(!hash[character]){
      console.log(hash)
      return false
    }
    
    hash[character] -= 1
    console.log(hash)
  }
 
  return true
 };
 console.log(isAnagram("chinoss","schinos"));

 


