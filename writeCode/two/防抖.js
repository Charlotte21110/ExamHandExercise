function debounce (fn, wait) {
  let timer = null;
  return function() {
    let context = this,
    args = arguments;
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, wait);
  }
}