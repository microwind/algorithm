/**
 * @desc
 * 质因数分解JS语言示例
 * 一个偶数可以 分解为若干个质数相乘。
 * 20 = 2 * 2 * 5
 * 46 = 2 * 23 
 */


;
(function () {
  function factorize(num) {
    let i = 2
    const result = []
    // 如果和数大于1，继续循环分解
    while (num > 1) {
      // 得到能被整除的最小的因数i
      while (num % i === 0) {
        result.push(i)
        // 除以因数之后得到的商再去分解
        num = num / i
      }
      i++
    }
    return result
  }

  /* test */
  console.log(factorize(20).join('*'))

})()

// Pollard Rho因数分解
;
(function () {
  function factorize(num) {
    const result = []
    let i = 2
    // 自2往上递增至该数字
    while (i <= num) {
      // 当i小于num时，可分解
      while (i < num) {
        // i可整除num，则i是因数
        if (num % i === 0) {
          result.push(i)
          // 重设数字为除以i后的得数
          num = num / i
        } else {
          break
        }
      }
      i++
    }
    result.push(num)
    return result
  }

  /* test */
  console.log(factorize(20).join('*'))

})()

// 优化
;
(function () {
  function factorize(num) {
    let i = 2
    const result = []
    // 如果因数的平方小于该数字，说明可以继续分解
    while (i * i <= num) {
      // 从小到大逐个往上递增，当遇到能被整除时取出该因数
      while (num % i === 0) {
        result.push(i)
        // 除以因数之后得到的数再去分解
        num = num / i
      }
      i++
    }
    // 最后的分解数如果大于1说明上一次整除不是自身，即是最后1个因素
    if (num > 1) {
      result.push(num)
    }
    return result
  }

  /* test */
  console.log(factorize(20).join('*'))

})()

/** 
 * test
  jarry@jarrys-MacBook-Pro factor % node --version
  v10.13.0
  jarry@jarrys-MacBook-Pro factor % node factor.js
  2*2*5
  2*2*5
  2*2*5
  jarry@jarrys-MacBook-Pro factor %
 */