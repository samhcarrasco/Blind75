/********************************************************CONTAINS DUPLICATE********************************************************/
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function conDup(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 1+ i; j < array.length; j++){
      if(array[i] == array[j]){
        return true
      }
    }
  }
  return false
}
console.log(conDup([1,2,3,4,5,6,7,8,9]))

//optimized solution (hashmap)


function conDup2(array){
  const hashMap={};
  
  for(let i = 0; i < array.length; i++){
    if(hashMap[array[i]]){
      return true
    }
    if(hashMap[array[i]] === undefined){
      hashMap[array[i]] = i
    }
  }
  return false
}
console.log(conDup2([1,3,4,5,8,9]))