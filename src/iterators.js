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
  return 5;
}

export {isMultipleOfFive, getMultiplesOfFive, getSumOfMultiples};