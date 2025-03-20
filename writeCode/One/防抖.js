function debounce (fn, wait) {
  let timer = null;
  return function() {
    let context = this, // 保存当前的内容
     args = arguments; // 保存传入的参数
    if (timer) {
      clearTimeout(timer); // 如果有定时器就清除
      timer = null; // 重新设置为null
    }
    timer = setTimeout(() => {
      fn.apply(context, args); //apply 方法用于调用函数 fn，并将 this 绑定到 context，同时传入参数 args。
    }, wait);
  }
}