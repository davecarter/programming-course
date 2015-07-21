const isMultipleOfFive = (n) => n % 5 === 0;

const getMultiplesOfFive = function(a, b) {
  for (var i = a; i <= b; i++) {
    if(isMultipleOfFive(i)){
      console.log('retorna sólo números múltiples de 5');
    }
  };
}

export {isMultipleOfFive, getMultiplesOfFive};