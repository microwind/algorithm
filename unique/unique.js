/**
 * Copyright © https://github.com/jarry All rights reserved.
 * @author: jarryli@gmail.com
 * @version: 1.0
 */

// the multi method for array unique
// JavaScript数组去重的N种方法之新数组检测法
(function () {
  // 1. 新建数组，把不存在的项添加进去
  console.time('time')
  const arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  const newArr = []
  // 遍历数组，逐项比较添加到新数组中去
  for (let i = 0, l = arr.length; i < l; i++) {
    for (let j = 0; j <= i; j++) {
      // 检查新数组是否已存在要添加的项
      if (arr[i] === arr[j]) {
        if (i === j) {
          newArr.push(arr[i])
        }
        // 如果新数组中已存在要添加项则跳过
        break
      }
    }
  }
  console.log('new array result:', newArr)
  console.timeEnd('time')
})();

(function () {
  // 1.1 新建数组与indexOf检查是否存在
  console.time('time')
  const arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  const newArr = []
  for (let i = 0, l = arr.length; i < l; i++) {
    if (newArr.indexOf(arr[i]) < 0) {
      newArr.push(arr[i])
    }
  }
  console.log('new array + indexOf:', newArr)
  console.timeEnd('time')
})();

(function () {
  // 1.2 新建数组与includes检查是否包含
  console.time('time')
  const arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  const newArr = []
  for (let i = 0, l = arr.length; i < l; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  console.log('new array + includes:', newArr)
  console.timeEnd('time')
})();

(function () {
  // 2.1 从后往前逐个对比，将重复的删除掉
  console.time('time')
  const arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  let len = arr.length
  while (len-- > 0) {
    for (let i = 0; i < len; i++) {
      if (arr[len] === arr[i]) {
        arr.splice(len, 1)
        break
      }
    }
  }
  console.log('one array last -> first result:', arr)
  console.timeEnd('time')
})();

(function () {
  // 2.2 从后往前逐个对比，将重复的删除掉
  console.time('time')
  const arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  let len = arr.length
  let i = 0
  while (len-- > 0) {
    i = len
    while (i-- > 0) {
      if (arr[len] === arr[i]) {
        arr.splice(len, 1)
        break
      }
    }
  }
  console.log('one array last -> first from right:', arr)
  console.timeEnd('time')
})();

(function () {
  // 3. 从前往后逐个对比，将重复的删除掉
  console.time('time')
  const arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1)
        len--
        i--
        break
      }
    }
  }
  console.log('one array first -> last result:', arr)
  console.timeEnd('time')
})();

(function () {
  // 4. forEach + indexOf
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var newArr = []
  for (var i = 0, l = arr.length; i < l; i++) {
    if (i === arr.indexOf(arr[i])) {
      newArr.push(arr[i])
    } else if (arr.indexOf(arr[i]) >= 0) {
      continue
    }
  }
  console.log('forEach + indexOf result:', newArr)
  console.timeEnd('time')
})();

(function () {
  // 5. filter + indexOf
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  arr = arr.filter((item, i) => i === arr.indexOf(item))
  console.log('filter + indexOf: ', arr)
  console.timeEnd('time')
})();

(function () {
  // 6. Array.from object
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var obj = {}
  arr.forEach((item) => {
    obj[item] = item
  })
  console.log('Array.from object:', Array.from(Object.values(obj)))
  console.timeEnd('time')
})();

(function () {
  // 7. Array.from Map
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var map = new Map()
  arr.forEach((item, i) => {
    map.set(item, item)
  })
  console.log('Array.from Map:', Array.from(map.keys()))
  console.timeEnd('time')
})();

(function () {
  // 8. from Set
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var set = new Set(arr)
  console.log('from Set:', Array.from(set))
  console.timeEnd('time')
})();

(function () {
  // 9. sort+remove
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  arr.sort()
  var l = arr.length
  while (l-- > 1) {
    if (arr[l] === arr[l - 1]) {
      arr.splice(l, 1)
    }
  }
  console.log('sort+remove:', arr)
  console.timeEnd('time')
})();

(function () {
  // 10. sort+remove ASE
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  arr.sort((a, b) => {
    return a.toString() > b.toString() ? 1 : -1
  })
  var l = arr.length
  for (var i = 0; i < l - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1)
      l--
      i--
    }
  }
  console.log('sort+remove ASE:', arr)
  console.timeEnd('time')
})();

(function () {
  // 11. from reduce
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var newArr = arr.reduce((result, item) => {
    if (!Array.isArray(result)) {
      result = [result]
    }
    return result.includes(item) ? result : [...result].concat(item)
  })
  console.log('from reduce:', newArr)
  console.timeEnd('time')
})();

(function () {
  // 12. indexOf + new Array push
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var newArr = []
  for (var i = 0, l = arr.length; i < l; i++) {
    var item = arr[i]
    if (newArr.indexOf(item) < 0) {
      newArr.push(item)
    }
  }
  console.log('new Array push:', newArr)
  console.timeEnd('time')
})();

(function () {
  // 13. filter+hasOwnProperty
  console.time('time')
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  var obj = {}
  arr = arr.filter(item => {
    return obj.hasOwnProperty((typeof item) + item) ? false : (obj[(typeof item) + item] = true)
  })
  console.log('filter+hasOwnProperty:', arr)
  console.timeEnd('time')
})();

(function () {
  // 14. recursion
  console.time('time')

  function recursionUnique(arr, len) {
    if (len <= 1) {
      return arr
    }
    var l = len
    var last = l - 1
    var isRepeat = false
    while (l-- > 1) {
      if (arr[last] === arr[l - 1]) {
        isRepeat = true
        break
      }
    }
    if (isRepeat) {
      arr.splice(last, 1)
    }
    return recursionUnique(arr, len - 1)
  }
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  console.log('recursionUnique:', recursionUnique(arr, arr.length))
  arr = [1, 3, -1, 1, 2, 2, 4, 2, 2, -1]
  console.log('recursionUnique:', recursionUnique(arr, arr.length))
  console.timeEnd('time')
})();

(function () {
  // 15. recursionUniqueNew
  console.time('time')

  function recursionUniqueNew(arr, len) {
    if (len < 1) {
      return []
    }
    var l = len
    var last = l - 1
    var lastItem = arr[last]
    var isRepeat = false
    var result = []
    while (l-- > 1) {
      if (lastItem === arr[l - 1]) {
        isRepeat = true
        break
      }
    }
    if (!isRepeat) {
      result.push(lastItem)
    }
    return recursionUniqueNew(arr, len - 1).concat(result)
  }
  var arr = ['a', 'a', 1, 1, 2, 2, 'b', 'b', 2, '1']
  console.log('recursionUniqueNew:', recursionUniqueNew(arr, arr.length))
  arr = [1, 3, -1, 1, 2, 2, 4, 2, 2, -1]
  console.log('recursionUniqueNew:', recursionUniqueNew(arr, arr.length))
  console.timeEnd('time')
})()

/**
jarrys-MacBook-Pro:unique jarry$ node unique.js
new array result: [ 'a', 1, 2, 'b' ]
time: 4.023ms
new array + indexOf: [ 'a', 1, 2, 'b' ]
time: 0.215ms
new array + includes: [ 'a', 1, 2, 'b' ]
time: 0.208ms
one array last -> first result: [ 'a', 1, 2, 'b' ]
time: 0.057ms
one array last -> first from right: [ 'a', 1, 2, 'b' ]
time: 0.046ms
one array first -> last result: [ 'a', 1, 2, 'b' ]
time: 0.046ms
forEach + indexOf result: [ 'a', 1, 2, 'b' ]
time: 0.052ms
filter + indexOf:  [ 'a', 1, 2, 'b' ]
time: 0.080ms
Array.from object: [ 1, 2, 'a', 'b' ]
time: 0.276ms
Array.from Map: [ 'a', 1, 2, 'b' ]
time: 0.382ms
from Set: [ 'a', 1, 2, 'b' ]
time: 0.348ms
sort+remove: [ 1, 2, 'a', 'b' ]
time: 0.091ms
sort+remove ASE: [ 1, 2, 'a', 'b' ]
time: 0.298ms
from reduce: [ 'a', 1, 2, 'b' ]
time: 0.426ms
new Array push: [ 'a', 1, 2, 'b' ]
time: 0.068ms
filter+hasOwnProperty: [ 'a', 1, 2, 'b' ]
time: 0.271ms
recursionUnique: [ 'a', 1, 2, 'b' ]
time: 0.119ms
recursionUniqueNew: [ 'a', 1, 2, 'b' ]
time: 0.110ms
*/