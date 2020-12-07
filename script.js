function euclideanAlgorithm (a, b, s, k) {
  var work = ' '
  var exit = 0 // exit variable
  // start of euclidian algorithm
  while (k !== 0) { // loops through until it gets k to zero
    console.log(s + ' = ' + Math.floor(s / k) + ' * ' + k + ' + ' + s % k)
    work = work.concat(s + ' = ' + Math.floor(s / k) + ' * ' + k + ' + ' + s % k + ' -> ')
    a.push(Math.floor(s / k)) // adds the floor of s / k to array a
    b.push(s % k) // adds s % k to array b
    var st = k // set temporary s = k
    k = s % k // sets k = s mod k
    s = st // sets s = temp s
    exit++ // Add one to exit variable
    if (exit > 1000) { // exit loop after 1000 loops
      console.log('Error')
      document.getElementById('GCD').innerHTML = 'Error'
      document.getElementById('Work').innerHTML = 'Error'
      return
    }
  }
  work = work.concat(s)
  console.log('Work: ' + work)
  console.log('The GCD is ' + s)
  document.getElementById('GCD').innerHTML = s
  document.getElementById('Work').innerHTML = work
}

function extendedEulidean (a, b, x, y, s, k) {
  var i = b.indexOf(0) // finds index of 0 in array
  console.log('x0 = 0')
  console.log('y0 = 1')
  console.log('x1 = 1')
  console.log('y1 = 0')
  var workX = 'x0 = 0 -> x1 = 1 -> '
  var workY = 'y0 = 1 -> y1 = 0 -> '

  for (var c = 0; c < i; c++) { // adds results of equations to array x and y
    x.push(-a[c] * x[c + 1] + x[c]) // multiplies array negative array a index by x plus 1 index plus x index
    console.log('x' + (c + 2) + ': ' + x[c + 2] + ' = ' + (-a[c]) + ' * ' + x[c + 1] + ' + ' + x[c])
    workX = workX.concat('x' + (c + 2) + ': ' + x[c + 2] + ' = ' + (-a[c]) + ' * ' + x[c + 1] + ' + ' + x[c] + ' -> ')
    y.push(-a[c] * y[c + 1] + y[c]) // same as above
    console.log('y' + (c + 2) + ': ' + y[c + 2] + ' = ' + (-a[c]) + ' * ' + y[c + 1] + ' + ' + y[c])
    workY = workY.concat('y' + (c + 2) + ': ' + y[c + 2] + ' = ' + (-a[c]) + ' * ' + y[c + 1] + ' + ' + y[c] + ' -> ')
  }
  workX = workX.concat(x[i + 1])
  workY = workY.concat(y[i + 1])
  console.log('X: ' + x[i + 1] + ' Y: ' + y[i + 1])
  console.log('Work X:' + workX)
  console.log('Work Y:' + workY)
  document.getElementById('X').innerHTML = x[i + 1]
  document.getElementById('Y').innerHTML = y[i + 1]
  document.getElementById('Work X').innerHTML = workX
  document.getElementById('Work Y').innerHTML = workY
  console.log(k + ' * ' + x[i + 1] + ' + ' + s + ' * ' + y[i + 1] + ' = ' + s)
  document.getElementById('Equation').innerHTML = k + ' * ' + x[i + 1] + ' + ' + s + ' * ' + y[i + 1] + ' = ' + s
  console.log(x[i + 1])
  console.log(y[i + 1])
  var h = x[i + 1]
  var l = y[i + 1]
  var exit = 0 // exit variable
  while (h < 0) { // adds s to index of x plus 1 if it is less than zero
    h = +h + +s // The plus ensures that the variable is treated as an int
    console.log(h)
    exit++ // increase exit variable
    if (exit > 1000) { // After 1000 repeats exit
      console.log('Error')
      document.getElementById('Inverse B').innerHTML = 'Error'
      document.getElementById('Inverse A').innerHTML = 'Error'
      return
    }
  }
  while (h > s) { // subtracts s from index of x plus 1 if it is greater than s
    h = +h - +s
    console.log(h)
    exit++ // increase exit variable
    if (exit > 1000) { // After 1000 repeats exit
      console.log('Error')
      document.getElementById('Inverse B').innerHTML = 'Error'
      document.getElementById('Inverse A').innerHTML = 'Error'
      return
    }
  }
  while (l < 0) { // adds k to index of y plus 1 if it is less than zero
    l = +l + +k
    console.log(l)
    exit++ // increase exit variable
    if (exit > 1000) { // After 1000 repeats exit
      console.log('Error')
      document.getElementById('Inverse B').innerHTML = 'Error'
      document.getElementById('Inverse A').innerHTML = 'Error'
      return
    }
  }
  while (l > k) { // subtracts k from index of y plus 1 if it is greater than k
    l = +l - +k
    console.log(l)
    exit++ // increase exit variable
    if (exit > 1000) { // After 1000 repeats exit
      console.log('Error')
      document.getElementById('Inverse B').innerHTML = 'Error'
      document.getElementById('Inverse A').innerHTML = 'Error'
      return
    }
  }
  console.log('The multiplicative inverse of ' + k + ' mod ' + s + ' is ' + h)
  console.log('The multiplicative inverse of ' + s + ' mod ' + k + ' is ' + l)
  document.getElementById('Inverse B').innerHTML = 'The multiplicative inverse of ' + k + ' mod ' + s + ' is ' + h
  document.getElementById('Inverse A').innerHTML = 'The multiplicative inverse of ' + s + ' mod ' + k + ' is ' + l
}

function eeac () {
  var a = [] // declaring array a
  var b = [] // declaring array b
  var x = [0, 1] // declaring array x
  var y = [1, 0] // declaring array y
  var s = document.getElementById('A').value // getting value from input box
  console.log(s)
  var k = document.getElementById('B').value // getting value from input box
  console.log(k)
  if ((isNaN(s) || s === '') || (isNaN(k) || k === '')) { // checks is entry is blank or not a number
    console.log('Please enter a number')
    window.alert('Please enter a number')
    return
  }
  euclideanAlgorithm(a, b, s, k)
  extendedEulidean(a, b, x, y, s, k)
}

function ec () {
  console.log('Test')
  var a = document.getElementById('Prob').value // getting value
  var b = a.split(',') // split input by commas
  var c = []
  var sum = 0
  var work = ' '
  for (var ch = 0; ch < b.length; ch++) {
    if (b[ch] > 1 || b[ch] < 0) { // checks if each entry is a decimal
      console.log('All enteries must be decimal')
      window.alert('All enteries must be decimal')
      return
    }
    if (isNaN(b[ch]) || b[ch] === '') { // checks is each entry is a number and not blank
      console.log('Please enter a number')
      window.alert('Please enter a number')
      return
    }
  }
  for (var d = 0; d < b.length; d++) {
    c.push(-b[d] * (Math.log(b[d]) / Math.log(2)))
    console.log(-b[d] + '* log2(' + b[d] + ') + ')
    work = work.concat(-b[d] + '* log2(' + b[d] + ') + ')
    sum += c[d]
  }
  work = work.concat(' = ' + sum)
  console.log(sum)
  console.log(work)
  document.getElementById('Entropy').innerHTML = sum
  document.getElementById('Work').innerHTML = work
}

function me () {
  console.log('ME')
  var ae = []
  var aj = []
  var aa = []
  var ai = []
  var aaa = []
  var x = document.getElementById('Base').value // getting value for Base
  var a = document.getElementById('Ex').value // getting value for Ex
  var n = document.getElementById('Mod').value // getting value for Mod
  if ((isNaN(x) || x === '') || (isNaN(a) || a === '') || (isNaN(n) || n === '')) { // checks is entry is blank or not a number
    console.log('Please enter a number')
    window.alert('Please enter a number')
    return
  }
  var b = a
  var e = 1
  var i = x ** e
  var j = i % n
  var work = ' '
  console.log(x + '^' + e + ' = ' + j)
  work = work.concat(x + '^' + e + ' = ' + j + '<br>')
  ae.push(e)
  aj.push(j)
  e = 2
  i = x ** e
  j = i % n
  console.log(x + '^' + e + ' = ' + j)
  work = work.concat(x + '^' + e + ' = ' + j + '<br>')
  ae.push(e)
  aj.push(j)
  e = 4
  while (e < a) {
    j = j ** 2
    j = j % n
    console.log(x + '^' + e + ' = ' + j)
    work = work.concat(x + '^' + e + ' = ' + j + '<br>')
    ae.push(e)
    aj.push(j)
    e = e * 2
  }
  var L = ae.length - 1
  for (var c = L; c > -1; c--) {
    var ans = a - ae[c]
    if (ans >= 0) {
      aa.push(ae[c])
      ai.push(c)
      a = a - ae[c]
    }
  }
  L = ai.length
  for (c = 0; c < L; c++) {
    var d = ai[c]
    aaa.push(aj[d])
  }
  var p = 1
  for (i = 0; i < aaa.length; i++) {
    p = (p * aaa[i]) % n
  }
  console.log(b + '= sum ' + aa)
  work = work.concat(b + ' = sum ' + aa + '<br>')
  console.log(x + '^' + b + ' = prod ' + aaa + ' = ' + p + ' mod ' + n)
  work = work.concat(x + '^' + b + ' = prod ' + aaa + ' = ' + p + ' mod ' + n + '<br>')
  var answer = x + '^' + b + ' = ' + p + ' mod ' + n
  document.getElementById('Answer').innerHTML = answer
  document.getElementById('Work').innerHTML = work
}

function prime (n, m) {
  var e = (m + 1) / 4
  var ce = e % 1
  if (ce !== 0) {
    console.log('There are no roots of ' + n + ' mod ' + m)
  }
  var x = (n ** e) % m
  var xm = (x ** 2) % m
  var b = (xm === n % m)
  console.log('x^2 = ' + n + ' mod ' + m)
  console.log('(' + m + ' + 1)/4 = ' + e)
  console.log('x = ' + n + '^' + e + ' = ' + x + ' mod ' + m)
  console.log(x + '^2 = ' + n + ' mod ' + m + b)
  console.log('x = +-' + x + ' mod ' + m)
  return { x, m }
}

function findMinX (num, rem, k) {
  var x = 1
  while (true) {
    var j = 0
    while (j < k) {
      if (x % num[j] !== rem[j]) {
        break
      }
      j++
    }
    if (j === k) {
      return x
    }
    x++
  }
}
function composite (n, m) {
  var n1 = []
  var m1 = []
  var mod = []
  var rem = []
  console.log('x^2 = ' + n + ' mod ' + m)
  for (var c = 2; c < m; c++) {
    var f = m % c
    if (f === 0) {
      m1.push(c)
    }
  }
  for (c = 0; c < m1.length; c++) {
    var i = n % m1[c]
    n1.push(i)
  }
  for (c = 0; c < n1.length; c++) {
    console.log('x^2 = ' + n1[c] + ' mod ' + m1[c])
    var { a, b } = prime(n1[c], m1[c])
    rem.push(a)
    mod.push(b)
  }
  var k = mod.length
  console.log('Use Chinese remander Theorem four times')
  var x = findMinX(mod, rem2, k)
  i = -rem[0] % mod[0]
  var rem2 = [i, rem[1]]
  var x1 = findMinX(mod, rem2, k)
  console.log('x = +-' + x + ', +-' + x1 + ' mod ' + m)
}

function msr () {
  console.log('MSR')
  var n = document.getElementById('Base').value
  var m = document.getElementById('Mod').value
  composite(n, m)
}

function ltd () {
  console.log('LTD')
  var a = document.getElementById('Base').value // getting value for Base
  console.log(a)
  var b = document.getElementById('Exponent').value // getting value for Exponent
  console.log(b)
  if ((isNaN(a) || a === '') || (isNaN(b) || b === '')) { // checks is entry is blank or not a number
    console.log('Please enter a number')
    window.alert('Please enter a number')
    return
  }
  if (b < 1000) {
    var l = 1
    for (var i = 0; i < b; i++) { // replaces large numbers from expenentiation with loop
      l = (l * a) % 1000 // multiplies then mods to keep numbers small
    }
    console.log(a + '^' + b + ' mod 1000 =' + l)
    document.getElementById('Answer').innerHTML = l
    var work = a + '^' + b + ' mod 1000 =' + l
    document.getElementById('Work').innerHTML = work
  } else {
    var c = b.length // getting the length of the number
    console.log(c)
    var d = c - 2 // subtracting two off on the length
    console.log(d)
    var f = '4' // 4 for Totient
    var g = '10' // 10 for Totient
    for (i = 0; i < d; i++) { // Adding zeros for Totient
      f = f.concat('0')
      g = g.concat('0')
    }
    i = b % f // mod of the exponent
    console.log(i)
    var j = 1
    for (var z = 0; z < i; z++) { // replaces large numbers from expenentiation with loop
      j = (j * a) % 1000 // multiplies then mods to keep numbers small
    }
    console.log(j)
    var k = Math.floor(b / f)
    console.log(k)
    console.log('Totient of ' + g + '=' + f)
    console.log(a + '^' + b + '= (' + a + '^' + f + ')^' + k + '* (' + a + '^' + i + ')')
    console.log(a + '^' + i + ' mod 1000 = ' + j)
    document.getElementById('Answer').innerHTML = j
    work = 'Totient of ' + g + '=' + f + '<br>' + a + '^' + b + '= (' + a + '^' + f + ')^' + k + '* (' + a + '^' + i + ')' + '<br>' + a + '^' + i + ' mod 1000 = ' + j
    document.getElementById('Work').innerHTML = work
  }
}

function rsa () {
  console.log('RSA')
  var a = document.getElementById('Text').value // getting value
  console.log(a)
  var b = document.getElementById('Key').value // getting value
  console.log(b)
  var c = document.getElementById('N').value // getting value
  console.log(c)
  if ((isNaN(a) || a === '') || (isNaN(b) || b === '') || (isNaN(c) || c === '')) { // checks is entry is blank or not a number
    console.log('Please enter a number')
    window.alert('Please enter a number')
    return
  }
  var d = 1
  for (var i = 0; i < b; i++) { // replaces large numbers from expenentiation with loop
    d = (d * a) % c // multiplies then mods to keep numbers small
  }
  console.log(d)
  var e = d % c
  console.log(e)
  document.getElementById('Answer').innerHTML = e
}
