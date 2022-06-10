function cellCompete(states, days)
{
  if(days === 0){
    return states
  }
    const state = []
    if(days < 0){
        return state
    } 
    // WRITE YOUR CODE HERE 
    for (let i = 0; i < states.length; i++){
        if(states[i-1] === undefined && states[i+1] === 0 ){
                state.push(0)
               
        }
       else if(states[states.length-2] === 0 && i == states.length-1){
            state.push(0)
         
        }

       else if(states[i-1] === states[i+1]){
          state.push(0)
        }
        else if(states[i-1] !== states[i+1]){
          state.push(1) 
        }
    }
    
   return cellCompete(state,days -= 1)
}

console.log(cellCompete([1,0,0,0,0,1,0,0],1))//[0,1,0,0,1,0,1,0]

console.log(cellCompete([1,1,1,0,1,1,1,1],2))//[0,0,0,0,0,1,1,0]

