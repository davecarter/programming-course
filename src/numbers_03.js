const getBigger = (a, b) =>  a > b ? a : b;
const getBiggestOfThree = (getBigger, c) => getBigger > c ? getBigger : c;

export default {getBigger, getBiggestOfThree};