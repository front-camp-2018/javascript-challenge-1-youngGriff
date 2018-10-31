/* eslint-disable-next-line */
export const doubleNum = num => {
  const strNum = num.toString();
  const subNum1 = strNum.slice(0, strNum.length / 2);
  const subNum2 = strNum.slice(strNum.length / 2, strNum.length);
  return subNum1 === subNum2 ? num : num * 2;
};
