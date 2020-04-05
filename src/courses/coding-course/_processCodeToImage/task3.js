function flat (array) {
  const output = [...array];
  let index = 0;
  while (index < output.length) {
    const item = output[index];
    if (Array.isArray(item)) {
      output.splice(index, 1, ...item);
    } else {
      index += 1;
    }
  }
  return output;
}