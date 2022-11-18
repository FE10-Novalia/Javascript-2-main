const pairSum = (arr, target) => {
  // your code here
  let outputArr = []

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        outputArr = [i,j]
      }
    }
  }
  return outputArr
};


module.exports = pairSum;
