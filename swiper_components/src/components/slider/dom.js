export function addClass(el, className){
  if(hasClass(el, className)){ // 判断需要添加的类名是否存在
    return
  }

  // 先将变量转换成数组
  let newClass = el.className.split(' ');
  // 然后将类名添加到数组中
  newClass.push(className);
  // 将数组里面的值转换成字符串]
  el.className = newClass.join(' ');
}

export function hasClass(el, className){
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
  return reg.test(el.className);
}