export function debounce(func, delay) {
  let timer = null
  return function(...arg) {
    if (timer) clearTimeout(timer)
    let context = this
    timer = setTimeout(() => {
      func.apply(context, arg)
    }, delay);
  }
}