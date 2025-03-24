function spliceDot(s) {
  const res = s.toString().split(".");
  const left = res[0];
  let arr = left.split("").reverse();
  let leftRes = [];
  for(let i = 0; i < arr.length; i++) {
    if (i % 3 == 0 && i !== 0) {
      leftRes.push(",");
    }
    leftRes.push(arr[i]);
  }
  leftRes.reverse();
  if (res[1]) {
      return leftRes.join("").concat("." + res[1])
  }
  else {
    return leftRes.join("")
  }
}
var a=1234567894532;
var b=673439.4542;
console.log(spliceDot(a))
console.log(spliceDot(b))