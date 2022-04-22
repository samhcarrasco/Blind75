/********************************************************TWOSUM********************************************************/
//Brute Force

//expected input: array with num values, and a num
//expected output: An array with 2 index positions

//initialize and define twosum
function twoSum(array,target){
  //create empty array that will hold I and J values
  const indexPosition = [];
  //create our first for loop to iterate through I will refer to the first value that being added
  for(let i = 0; i < array.length; i++){
    //create second loop to iterate through J will refer to the second value being added (to I)
    for(let j = 1; j < array.length; j++){      
      //when I + J = target
      if(array[i]+array[j] === target){
       //push I and J into empty array
       indexPosition.push(i,j)
       return indexPosition
      }
    }
  }
  //return empty array
} 

//tests
console.log(twoSum([1,2,3],4))//[0,2]
console.log(twoSum([1,2,3,4],6))//[1,3]
console.log(twoSum([]))

 //optimized solution(using hashmap)
function twoSummer(array, target){
  const hashMap = {};
  for(let i = 0; i < array.length; i++){
    let addend = target - array[i]
    if(hashMap[addend] == undefined){
      hashMap[array[i]] = i
    }
    else{
      return [hashMap[addend], i]
    }
  }
};

console.log("optimized",twoSummer([1,2,3],4))//[0,2]
console.log(twoSummer([1,2,3],6))//[1,3]
console.log(twoSummer([]))