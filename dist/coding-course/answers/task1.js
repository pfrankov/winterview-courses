module.exports =
    `function get (obj, path) {
  return path.split(".").reduce((dive, key) => dive && dive[key], obj);
}`;
