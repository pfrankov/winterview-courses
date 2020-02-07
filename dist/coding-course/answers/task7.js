module.exports =
    `function largestN (array, number) {
  // Это не самый оптимальный алгоритм.
  // Придумайте, как его улучшить. 
  return [...array].sort((a, b) => b - a)[number - 1];
}`;
