function *foo() {
  var arr = [ yield 11, yield 13, yield 17]
  yield arr
}

var f = foo()
console.log(f.next().value) // 11
console.log(f.next(314).value) // 13
console.log(f.next(218).value) // 17
console.log(f.next(42).value)  // [ 314, 218, 42 ]
