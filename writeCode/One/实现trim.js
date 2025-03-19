String.prototype.trim = function() {
  return this.replace(/^\s\s*/, '').replace(/\s\s$/, '');
};
var str = "    word    ";
console.log(str.trim());