module.exports =
    `function isPalindrome (str) {
  if (str.length < 1) {
    return true;
  }
  const cleared = str.replace(/[^a-zA-Z0-9а-яА-Я]/g, "").toLowerCase();
  let rightIndex = cleared.length - 1;
  for (let leftIndex = 0; leftIndex <= rightIndex; leftIndex++) {
    if (cleared[leftIndex] !== cleared[rightIndex]) {
      return false;
    } else {
      rightIndex--;
    }
  }
  return true
}`;
