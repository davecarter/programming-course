const isMultipleOfFive = (n) => n % 5 === 0;

const getMultiplesOfFive = function(a, b) {
  for (var i = a; i <= b; i++) {
    if(i % 5 === 0){
      console.log('retorna sólo números múltiples de 5');
    }
  };
}

export {isMultipleOfFive, getMultiplesOfFive};