const isMultipleOfFive = (n) => n % 5 === 0;

const getMultiplesOfFive = (a, b) => {
  var multiples = [];
  for (var i = a; i <= b; i++) {
    
    if(isMultipleOfFive(i)){
      var result = multiples.push(i);
    }
  };
  return multiples;
}

const getSumOfMultiples = (a, b) => {
  var getMultiples = getMultiplesOfFive(a, b);
  return parseInt(getMultiples);
}

export {isMultipleOfFive, getMultiplesOfFive, getSumOfMultiples};