const getBigger = (a, b) =>  a > b ? a : b;
const getSmaller = (a, b) =>  a < b ? a : b;
const getBiggestOfThree = (getBigger, c) => getBigger > c ? getBigger : c;
const getSmallerOfThree = (getSmaller, c) => getSmaller < c ? getSmaller : c;

export default {getBigger, getSmaller, getBiggestOfThree, getSmallerOfThree};