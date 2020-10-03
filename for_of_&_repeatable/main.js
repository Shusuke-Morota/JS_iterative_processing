
// for...of
// イテレーターを持つオブジェクトの反復操作を行う。

// イテレーター
// 反復操作を行う際に使用するオブジェクト(反復可能オブジェクト)
// ex) String, Array, Map, Set, Arguments, etc...


const arry = ["a", "b", "c"];

for (let v of arry) {
    console.log(v);
}

// vに渡ってくるのは配列に格納されている値