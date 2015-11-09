const max = process.argv[2];

let FizzBuzz = {
  [Symbol.iterator]() {
    // ここに FizzBuzzの計算を書く
    // ヒント：
    // 計算を継続させたい時、つまり終了条件である繰り返し回数が max を超えていない時は
    // done: false のオブジェクトを返却する。
    // 逆に終了条件をみたすときには done: true のオブジェクトを返却する。
    let i = 1;
    // iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
    return {
      next() {
        // nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
        if (i > max) return { done: true };
        let s = i;
        if (i % 3 === 0 && i % 5 === 0) s = 'FizzBuzz';
        else if (i % 3 === 0) s = 'Fizz';
        else if (i % 5 === 0) s = 'Buzz';
        i += 1;
        return { done: false, value: s };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}
