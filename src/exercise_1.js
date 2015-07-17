const getTheGreatestNumber = function(a, b){
  return (a >= b) ? a : b;
};

const compareThreeNumbers = function(a, b, c){
  if(getTheGreatestNumber(a, b) == a){
    return getTheGreatestNumber(a, c);
  } else {
    return getTheGreatestNumber(b, c);
  }

  return c;
};

export default {getTheGreatestNumber, compareThreeNumbers};