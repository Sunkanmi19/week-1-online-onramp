function highestSum(x, y) {
  function sum(a) {
    let length = a.length;
    let summation = 0;
    for (let i = 0; i < length; i++) {
      summation += a[i];
    {
      return summation;
    }
    let firstsum = sum(x);
    let secondsum = sum(y);

    if (firstsum > secondsum) {
      return firstsum;
    } else {
      return secondsum;
    }
  }
module.exports = highestSum