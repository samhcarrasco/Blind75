
/***********************************************Best Time to Buy and Sell Stock*****************************************************************/
var maxProfit = function(array) {
  //initialize 2 pointers
  let p1 = 0;
  let p2 = 1;
  //max profit to return 
  let maxProf = 0;
  //loop will iterate as long as it has not reach the end of the array
  while(p2 < array.length){
    //conditional will check if the p1(buy) pointer is less than sell pointer(p2) if so then positive number = profit
    if(array[p1]<array[p2]){
      //compare which is greater the current profit or the previous profit and set it to the greatest of the two
      maxProf = Math.max(maxProf,array[p2] - array[p1])
    }
    //if the p1 is greater than p2 this indicates p2 is the new lowest point so we reassign p1 to buy at the lowest...
    else{
      p1 = p2
    }
    //we always increment p2 to the next value
    p2 += 1
};
//return max prof
return maxProf
}
console.log(maxProfit([10,8,100,10,1,5]))