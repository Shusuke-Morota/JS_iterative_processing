
// for...in
// プロトタイプチェーン内も列挙対象となる。
// for...inを使うループの場合、自分自身に設定されているプロパティーのみを列挙したい場合は、
// Object.hasOwnProperty()というメソッドを使う。

// Symbolとfor...in
// Symbolで定義したプロパティーはfor...inで列挙対象にならない。

const obj = {
    prop1: "value1",
    prop2: "value2",
    prop3: "value3"
}

Object.prototype.method = function () { }
Object.defineProperty(Object.prototype, "method", {
    enumerable: false
});

const d = Object.getOwnPropertyDescriptor(Object.prototype, "method");
console.log(d);

for (let key in obj) {
    console.log(key, obj[key]);
}