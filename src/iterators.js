const isMultipleOfFive = (n) => n % 5 === 0;

const getMultiplesOfFive = function(a, b) {
  var multiples = [];
  for (var i = a; i <= b; i++) {
    
    if(isMultipleOfFive(i)){
      var result = multiples.push(i);
      console.log('retorna sólo números múltiples de 5 como el ' + multiples);
    }
  };
  return multiples;
}

export {isMultipleOfFive, getMultiplesOfFive};