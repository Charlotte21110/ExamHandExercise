// 快手的题目 改版
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("timeout " + i);
  }, 0);

  new Promise(function (resolve) {
    console.log("promise " + i);
    for (var j = 0; j < 1000; j++) {
      if (j == 999) {
        resolve();
      }
    }
  }).then(function () {
    console.log("then " + i);
  });

  console.log("global " + i);
}
// 解析
// 同步任务 微任务 宏任务
/**
 * 输出顺序：我以为答案 global 0 global 1 global 2  then 2 promise 2 timeout2
 * 
 * 实际上错了，因为【new promise是同步】创建的，它的构造函数会立即执行！！！，global那块也是会立即执行
 * 而【then】这个是异步的，算是微任务，要等同步任务执行完再执行
 * 最后才去执行宏任务，setTimeout里面的
 * 【var是函数作用域，可以变量提升的】，for循环结束之后i已经等于3了，所以会出现输出then timeout 3的情况，输出三次是因为外层有三次循环
 *  所以最终输出是：
    promise 0
    global 0
    promise 1
    global 1
    promise 2
    global 2
    then 3
    then 3
    then 3
    timeout 3
    timeout 3
    timeout 3
 */