
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  }
  let minimum = Math.min(...array);
  return minimum;
}

exports.max = function max (array) {
  if (!array || !array.length){
    return 0;
  }
  let maximal = Math.max(...array);
  return maximal;
}

exports.avg = function avg (array) {
  if (!array || !array.length){
    return 0;
  }
  let summa = 0;
  for ( let i = 0; i < array.length; i++) {
     summa += array[i] ;    

  }
  let average = summa / array.length;
  return average
  }





