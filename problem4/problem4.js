const findMaxSumSubArray = (k, arr) => {
  // your code here
  let maxSum = 0
  for(let i = 0; i < arr.length; i++){
    let array = [], increment = 0
    while(array.length < k){
      array.push(arr[i + increment])
      increment++
    }
    let sum = array.reduce((a,b) => a + b)
    if( sum > maxSum){
      maxSum = sum 
    }
  }
  return maxSum
};

module.exports = findMaxSumSubArray;
