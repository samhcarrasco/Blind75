function three(arr){
  if(arr[0] == undefined){
    return "empty array man ";
  }
  if(arr.length < 3){
    return "longer array pls"
  }
  let p1 = 0;
  let p2 = 1;
  let p3 = 2;
  const solution =[];
  for(let p1= 0; p1 < arr.length - 2; p1++){
    console.log("p1 loop", p1)
    while(p2 < arr.length -1){
      console.log("p2 loop", p2)
      while(p3 < arr.length){
        if(arr[p1]+arr[p2]+arr[p3] === 0){
          solution.push([arr[p1],arr[p2],arr[p3]])
        }
        console.log("p3 loop", p3,arr[p3])
        if(arr[p1]+arr[p2]+arr[p3] === 0){
          console.log(solution)
          solution.push([arr[p1],arr[p2],arr[p3]])
        }
        p3++
      }
      p2++
    }
    return solution
  }
};
console.log("hi")
console.log(three([-1,0,1,2,-1,-4]))
console.log(three([]))
console.log(three([0,1,3]))