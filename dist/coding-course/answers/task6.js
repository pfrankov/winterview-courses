module.exports =
    `function compress (string) {
  let result = "";
  let sum = 1;
  for (let i = 0; i < string.length; i ++) {
    if (string[i] === string[i + 1]) {
      sum++;
    } else {
      result += string[i] + sum;
      sum = 1;
    }
  }
  return result;
}`;
