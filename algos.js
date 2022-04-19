/********************************************************TWOSUM********************************************************/
// //Brute Force

// //expected input: array with num values, and a num
// //expected output: An array with 2 index positions

// //initialize and define twosum
// function twoSum(array,target){
//   //create empty array that will hold I and J values
//   const indexPosition = [];
//   //create our first for loop to iterate through I will refer to the first value that being added
//   for(let i = 0; i < array.length; i++){
//     //create second loop to iterate through J will refer to the second value being added (to I)
//     for(let j = 1; j < array.length; j++){      
//       //when I + J = target
//       if(array[i]+array[j] === target){
//        //push I and J into empty array
//        indexPosition.push(i,j)
//        return indexPosition
//       }
//     }
//   }
//   //return empty array
// } 




// //tests
// console.log(twoSum([1,2,3],4))//[0,2]
// console.log(twoSum([1,2,3,4],6))//[1,3]
// console.log(twoSum([]))


// //optimized solution(using hashmap)

/********************************************************CONTAINS DUPLICATE********************************************************/
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// function conDup(array){
//   for(let i = 0; i < array.length; i++){
//     for(let j = 1+ i; j < array.length; j++){
//       if(array[i] == array[j]){
//         return true
//       }
//     }
//   }
//   return false
// }
// console.log(conDup([1,2,3,4,5,6,7,8,9]))

//optimized solution (hashmap)

/********************************************************Valid Anagram********************************************************/
// var isAnagram = function(s, t) {
//   const string = s.split('')
//   const compare = t.split('')
//   if(string.length !== compare.length ){
//     return false
//   }
//   for(let i = 0; i < string.length; i++){
//     for 
//   }
 
// };
// isAnagram("chinos","music");

/***********************************************Best Time to Buy and Sell Stock*****************************************************************/

var maxProfit = function(array) {
    let p1 = 0;
    let p2 = 1;
    let maxProf = 0;
    while(p1 < array.length-1){
      if(array[p2] - array[p1] > maxProf){
        maxProf = array[p2] - array[p1]
      }
      if(p2 === array.length){
        p2 = p1 + 1
        p1++
      }
      p2++
    }
   if(maxProf < 1){return 0}
   return maxProf
};

