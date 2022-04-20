
/***********************************************Best Time to Buy and Sell Stock*****************************************************************/
var maxProfit = function(array) {
  let p1 = 0;
  let p2 = 1;
  let maxProf = 0;
  while(p2 < array.length){
    if(array[p1]<array[p2]){
      let profit = array[p2] - array[p1]
      maxProf = Math.max(maxProf,profit)
    }
    else{
      p1 = p2
    }
    p2 += 1
};
return maxProf
}
console.log(maxProfit([5,8,2,9,11,115,12,1,1123,2235234]))