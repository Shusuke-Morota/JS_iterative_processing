
// MapとSet
// データを管理するための入れ物（コレクション）

// ObjectとMapの違い
// Objectはkeyとして持てるのは文字列, for...inは使えて、for...ofは使えない
// Mapはkeyの制約は無く、for...inは使えず、for...ofは使える

// ArrayとSetの違い
// Arrayは重複値を持てて、for...in, for...ofが使える
// Set重複値を持てず、for...inは使えないが、for...ofは使える


const map = new Map();
const key1 = {};

map.set(key1, "value1")
console.log(map.get(key1));  //value1

const key2 = function () { }
map.set(key2, "value2")
console.log(map.get(key2));  //value2
// 関数であっても値を取得することができる。

let key3 = 0;
map.set(key3, "value3")
console.log(map.get(key3));


// Mapをfor...ofで取得する

for (const m of map) {
    console.log(m);
}

// Setの場合

const s = new Set();
s.add(key1);
s.add(key1);

for (let k of s) {
    console.log(k);
}

// 重複文は反映されない。
