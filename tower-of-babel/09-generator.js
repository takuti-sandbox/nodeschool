const max = process.argv[2];

let FizzBuzz = function*() {
  for (var i = 1; i <= max; i++) {
    if (i % 3 === 0 && i % 5 === 0) yield 'FizzBuzz';
    else if (i % 3 === 0) yield 'Fizz';
    else if (i % 5 === 0) yield 'Buzz';
    else yield i;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
