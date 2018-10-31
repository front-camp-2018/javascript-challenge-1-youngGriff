/* eslint-disable-next-line */
export const sortByWeight = arr => {
  return arr.sort((a, b) => {
    return getWeight(a) > getWeight(b);
  });
};
const getWeight = num => {
  return num.split('')
    .map(item => Number(item))
    .reduce(function (sum, current) {
      return sum + current;
    }, 0);
};