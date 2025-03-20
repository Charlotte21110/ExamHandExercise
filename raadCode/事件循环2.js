// 快手原题 变形
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("timeout " + i);
  });

  new Promise(function (resolve) {
    console.log("promise " + i);
    for (var i = 0; i < 1000; i++) {
      i == 99 && resolve();
    }
    console.log('promise' + i);
  }).then(function () {
    console.log("then " + i);
  });

  console.log("global " + i);
}
/**
 * 
 *
 * 外层的i被遮盖，内层的还没定义就会undefined
 * 正确答案：
 * 
    promise undefined
    promise1000
    global 0
    promise undefined
    promise1000
    global 1
    promise undefined
    promise1000
    global 2
    then 3
    then 3
    then 3
    timeout 3
    timeout 3
    timeout 3
 */