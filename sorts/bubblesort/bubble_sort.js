/**
 * Copyright © https://github.com/jarry All rights reserved.
 * @author: jarryli@gmail.com
 * @version: 1.0
 */
(function () {

  // 1. ASE
  function bubbleSort(arr) {
    console.log('bubbleSort from left to right:')
    const len = arr.length
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        // 自左往右每两个进行比较，把大的交换到右侧
        // 逐轮冒出最大数，已经排好序的不要再比较
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
        console.log('i=' + i, 'j=' + j, arr)
      }
    }
  }

  // 2. DESC
  function bubbleSort(arr) {
    console.log('bubbleSort from right to left:')
    const len = arr.length
    for (var i = 0; i < len; i++) {
      for (var j = len - 1; j > i; j--) {
        // 自右往左每两个进行比较，把小的交换到右侧
        // 逐轮冒出最小数，已经排好序的不要再比较
        if (arr[j - 1] < arr[j]) {
          [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
        }
        console.log('i=' + i, 'j=' + j, arr)
      }
    }
  }

  // 3. add flag
  function bubbleSort(arr) {
    console.log('bubbleSort add flag:')
    // 增加一个标志，如果某一轮没有进行过任何的交换
    // 则说明当前数组已排好序，则不必继续后面的遍历，
    const len = arr.length
    var flag = true

    for (var i = 0; i < len && flag === true; i++) {
      flag = false
      console.warn('no. ' + i)
      for (var j = 0; j < len - i - 1; j++) {
        // 自左往右每两个进行比较，把大的交换到右侧
        // 逐轮冒出最大数，已经排好序的不要再比较
        if (arr[j] > arr[j + 1]) {
          flag = true;
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
        console.log('i=' + i, 'j=' + j, arr)
      }
    }
  }

  // 4. 分为左右两列，左列已排序，右侧待排序。自左往右循环左列，逐个与待排序项比较并交换，外循环针对待排序项。
  function bubbleSort4(arr) {
    const len = arr.length
    for (let i = 1; i < len; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]]
        }
      }
    }
    return arr
  }

  const arr = [7, 11, 9, 10, 12, 13, 8]
  console.time('bubbleSort')
  bubbleSort(arr)
  console.timeEnd('bubbleSort')
  console.log(arr)
  console.log('bubbleSort4(arr):', bubbleSort4(arr))
})()

/*
jarrys-MacBook-Pro:bubblesort jarry$ node bubble_sort.js 
bubbleSort add flag:
no. 0
i=0 j=0 [ 7, 11, 9, 10, 12, 13, 8 ]
i=0 j=1 [ 7, 9, 11, 10, 12, 13, 8 ]
i=0 j=2 [ 7, 9, 10, 11, 12, 13, 8 ]
i=0 j=3 [ 7, 9, 10, 11, 12, 13, 8 ]
i=0 j=4 [ 7, 9, 10, 11, 12, 13, 8 ]
i=0 j=5 [ 7, 9, 10, 11, 12, 8, 13 ]
no. 1
i=1 j=0 [ 7, 9, 10, 11, 12, 8, 13 ]
i=1 j=1 [ 7, 9, 10, 11, 12, 8, 13 ]
i=1 j=2 [ 7, 9, 10, 11, 12, 8, 13 ]
i=1 j=3 [ 7, 9, 10, 11, 12, 8, 13 ]
i=1 j=4 [ 7, 9, 10, 11, 8, 12, 13 ]
no. 2
i=2 j=0 [ 7, 9, 10, 11, 8, 12, 13 ]
i=2 j=1 [ 7, 9, 10, 11, 8, 12, 13 ]
i=2 j=2 [ 7, 9, 10, 11, 8, 12, 13 ]
i=2 j=3 [ 7, 9, 10, 8, 11, 12, 13 ]
no. 3
i=3 j=0 [ 7, 9, 10, 8, 11, 12, 13 ]
i=3 j=1 [ 7, 9, 10, 8, 11, 12, 13 ]
i=3 j=2 [ 7, 9, 8, 10, 11, 12, 13 ]
no. 4
i=4 j=0 [ 7, 9, 8, 10, 11, 12, 13 ]
i=4 j=1 [ 7, 8, 9, 10, 11, 12, 13 ]
no. 5
i=5 j=0 [ 7, 8, 9, 10, 11, 12, 13 ]
bubbleSort: 6.009ms
[ 7, 8, 9, 10, 11, 12, 13 ]
bubbleSort4(arr): [ 7, 8, 9, 10, 11, 12, 13 ]
*/