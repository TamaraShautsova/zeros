module.exports = function getZerosCount(number) {
  let zerosCount = 0;
    for (let i = 5; i <= number; i *= 5) {
      zerosCount += Math.floor(number / i);
    }
  return zerosCount;
}
