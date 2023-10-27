module.exports = function reverse (n) {
n = Math.abs(n); 
let reversed = 0;

while (n !== 0) {
  reversed = reversed * 10 + n % 10;
  n = Math.floor(n / 10);
}

return reversed; 
}
