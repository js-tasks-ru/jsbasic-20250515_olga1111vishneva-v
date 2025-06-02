function camelize(str) {
  return str
  .split('-')
  .map((text, index) => {
    return index === 0 ? text : text.charAt(0).toUpperCase() + text.slice(1);
  })
  .join ('');
}
