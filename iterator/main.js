
// イテレーター
// 反復操作を行う際に使用するオブジェクト。


// maxはループの上限値
function genIterator(max) {
    let i = 0;

    return {
        next: function () {
            if (i > max) {
                return {
                    done: true
                }
            } else {
                return {
                    done: false,
                    value: i++
                }
            }
        }
    }
}
// doneがfalseのときはループを継続

const it = genIterator(10);

let a = it.next();
while (!a.done) {
    console.log(a.value);
    a = it.next();
}
