module.exports = function reverse (n) {
  let i = 0, result = '';
  
  n = Math.abs(n).toString();
  
  while (i < n.length) {
      result += n[n.length - i - 1];
      i++;
  }
  return result * 1;
}
  
