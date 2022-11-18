const makeDiamond = (char) => {
  // your code here
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let row = alphabet.indexOf(char), output = ``,
  col = row * 2 + 1

  for(let i = 0; i <= row; i++){
    for(let j = 0; j < col; j++){
      if(j > row - 1 + i && j <= row + i || j <= row - i && j > row-1-i){
        output += `${alphabet[i]}`
      }else{
        output += `·`
      }
    }
    output += `\n`
  }

  for(let i = row - 1; i >= 0; i--){
    for(let j = 0; j < col; j++){
      if(j > row - 1 + i && j <= row + i || j <= row - i && j > row-1-i ){
        output += `${alphabet[i]}`
      }else{
        output += `·`
      }
    }
    output += `\n`
  }

  return output
  
};

// console.log(makeDiamond('D'))
// console.log(makeDiamond('I'))
// console.log(makeDiamond('G'))
module.exports = makeDiamond;
