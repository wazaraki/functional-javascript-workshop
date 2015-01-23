
module.exports = function hof(fn, num) {
  if (num < 1) return;
  fn();
  hof(fn, num - 1);
}