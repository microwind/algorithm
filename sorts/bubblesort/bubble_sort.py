#!/usr/bin/env python
#-*- encoding: UTF-8-*-
"""
 * Copyright © https://github.com/jarry All rights reserved.
 * @author: jarryli@gmail.com
 * @version: 1.0
"""
import time
# ASE
def bubble_sort1(arr):
  print('bubble_sort1 from left to right:')
  length = len(arr)
  for i in range(length):
    for j in range(length - i - 1):
      # 自左往右每两个进行比较，把大的交换到右侧
      # 逐轮冒出最大数，已经排好序的不要再比较
      if (arr[j] > arr[j + 1]):
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      print('i=' + str(i), 'j=' + str(j), arr)


# DESC
def bubble_sort2(arr):
  print('bubble_sort2 from right to left:')
  length = len(arr)
  for i in range(length):
    for j in range(length - 1, i, -1):
      # 自右往左每两个进行比较，把小的交换到右侧
      # 逐轮冒出最小数，已经排好序的不要再比较
      if (arr[j - 1] < arr[j]):
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      print('i=' + str(i), 'j=' + str(j), arr)


# add flag
def bubble_sort3(arr):
  print('bubble_sort3 add flag:')
  # 增加一个标志，如果某一轮没有进行过任何的交换
  # 则说明当前数组已排好序，则不必继续后面的遍历，
  length = len(arr)
  flag = True

  for i in range(length):
    flag = False
    print('no. ' + str(i))
    for j in range(length -i - 1):
      # 自左往右每两个进行比较，把大的交换到右侧
      # 逐轮冒出最大数，已经排好序的不要再比较
      if (arr[j] > arr[j + 1]):
        flag = True
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      
      print('i=' + str(i), 'j=' + str(j), arr)


## tests

arr1 = [ 7, 11, 9, 10, 12, 13, 8 ]
start_time = time.time()
bubble_sort1(arr1)
print(arr1)
print("time:" + str((time.time() - start_time) * 1000) + " ms")

arr2 = [ 7, 11, 9, 10, 12, 13, 8 ]
start_time = time.time()
bubble_sort2(arr2)
print(arr2)
print("time:" + str((time.time() - start_time) * 1000) + " ms")

arr3 = [ 7, 11, 9, 10, 12, 13, 8 ]
start_time = time.time()
bubble_sort3(arr3)
print(arr3)
print("time:" + str((time.time() - start_time) * 1000) + " ms")

"""
jarrys-MacBook-Pro:bubble_sort jarry$ python bubble_sort.py
bubble_sort add flag:
no. 0
('i=0', 'j=0', [7, 11, 9, 10, 12, 13, 8])
('i=0', 'j=1', [7, 9, 11, 10, 12, 13, 8])
('i=0', 'j=2', [7, 9, 10, 11, 12, 13, 8])
('i=0', 'j=3', [7, 9, 10, 11, 12, 13, 8])
('i=0', 'j=4', [7, 9, 10, 11, 12, 13, 8])
('i=0', 'j=5', [7, 9, 10, 11, 12, 8, 13])
no. 1
('i=1', 'j=0', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=1', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=2', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=3', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=4', [7, 9, 10, 11, 8, 12, 13])
('i=1', 'j=5', [7, 9, 10, 11, 8, 12, 13])
no. 2
('i=2', 'j=0', [7, 9, 10, 11, 8, 12, 13])
('i=2', 'j=1', [7, 9, 10, 11, 8, 12, 13])
('i=2', 'j=2', [7, 9, 10, 11, 8, 12, 13])
('i=2', 'j=3', [7, 9, 10, 8, 11, 12, 13])
('i=2', 'j=4', [7, 9, 10, 8, 11, 12, 13])
('i=2', 'j=5', [7, 9, 10, 8, 11, 12, 13])
no. 3
('i=3', 'j=0', [7, 9, 10, 8, 11, 12, 13])
('i=3', 'j=1', [7, 9, 10, 8, 11, 12, 13])
('i=3', 'j=2', [7, 9, 8, 10, 11, 12, 13])
('i=3', 'j=3', [7, 9, 8, 10, 11, 12, 13])
('i=3', 'j=4', [7, 9, 8, 10, 11, 12, 13])
('i=3', 'j=5', [7, 9, 8, 10, 11, 12, 13])
no. 4
('i=4', 'j=0', [7, 9, 8, 10, 11, 12, 13])
('i=4', 'j=1', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=2', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=3', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=4', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=5', [7, 8, 9, 10, 11, 12, 13])
no. 5
('i=5', 'j=0', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=1', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=2', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=3', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=4', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=5', [7, 8, 9, 10, 11, 12, 13])
no. 6
('i=6', 'j=0', [7, 8, 9, 10, 11, 12, 13])
jarrys-MacBook-Pro:bubble_sort jarry$ python bubble_sort.py
bubble_sort add flag:
no. 0
('i=0', 'j=0', [7, 11, 9, 10, 12, 13, 8])
('i=0', 'j=1', [7, 9, 11, 10, 12, 13, 8])
('i=0', 'j=2', [7, 9, 10, 11, 12, 13, 8])
('i=0', 'j=3', [7, 9, 10, 11, 12, 13, 8])
('i=0', 'j=4', [7, 9, 10, 11, 12, 13, 8])
('i=0', 'j=5', [7, 9, 10, 11, 12, 8, 13])
no. 1
('i=1', 'j=0', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=1', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=2', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=3', [7, 9, 10, 11, 12, 8, 13])
('i=1', 'j=4', [7, 9, 10, 11, 8, 12, 13])
('i=1', 'j=5', [7, 9, 10, 11, 8, 12, 13])
no. 2
('i=2', 'j=0', [7, 9, 10, 11, 8, 12, 13])
('i=2', 'j=1', [7, 9, 10, 11, 8, 12, 13])
('i=2', 'j=2', [7, 9, 10, 11, 8, 12, 13])
('i=2', 'j=3', [7, 9, 10, 8, 11, 12, 13])
('i=2', 'j=4', [7, 9, 10, 8, 11, 12, 13])
('i=2', 'j=5', [7, 9, 10, 8, 11, 12, 13])
no. 3
('i=3', 'j=0', [7, 9, 10, 8, 11, 12, 13])
('i=3', 'j=1', [7, 9, 10, 8, 11, 12, 13])
('i=3', 'j=2', [7, 9, 8, 10, 11, 12, 13])
('i=3', 'j=3', [7, 9, 8, 10, 11, 12, 13])
('i=3', 'j=4', [7, 9, 8, 10, 11, 12, 13])
('i=3', 'j=5', [7, 9, 8, 10, 11, 12, 13])
no. 4
('i=4', 'j=0', [7, 9, 8, 10, 11, 12, 13])
('i=4', 'j=1', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=2', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=3', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=4', [7, 8, 9, 10, 11, 12, 13])
('i=4', 'j=5', [7, 8, 9, 10, 11, 12, 13])
no. 5
('i=5', 'j=0', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=1', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=2', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=3', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=4', [7, 8, 9, 10, 11, 12, 13])
('i=5', 'j=5', [7, 8, 9, 10, 11, 12, 13])
no. 6
('i=6', 'j=0', [7, 8, 9, 10, 11, 12, 13])
('i=6', 'j=1', [7, 8, 9, 10, 11, 12, 13])
('i=6', 'j=2', [7, 8, 9, 10, 11, 12, 13])
('i=6', 'j=3', [7, 8, 9, 10, 11, 12, 13])
('i=6', 'j=4', [7, 8, 9, 10, 11, 12, 13])
('i=6', 'j=5', [7, 8, 9, 10, 11, 12, 13])
[7, 8, 9, 10, 11, 12, 13]
time:0.400066375732 ms
"""