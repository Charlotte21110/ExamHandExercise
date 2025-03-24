// 浅拷贝
let newObject = {...obj} // 这个最简单了
function clone(target) {
  for (let key in target) {
    newObject[key] = target[key]
  }
  return newObject;
}

// 深拷贝 json的序列化和反序列化
JSON.parse(JSON.stringify)

// 如果是考虑了循环引用的问题的话
function deepClone(obj) {
  if (!obj || typeof obj !== 'object') return
  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj(key) = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
}