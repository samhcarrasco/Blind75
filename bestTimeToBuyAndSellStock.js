
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