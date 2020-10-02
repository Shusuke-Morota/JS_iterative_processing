for (let i = 0; i < 5; i++) {
    const j = i * 2;
    setTimeout(function () {
        console.log(j);
    }, 1000);
}

// constは再宣言も再代入もできないので、このループ文のスコープが１ループ毎に切り替わっていない場合には
// エラーが発生するはずだが、エラーは発生せず。
// このループ文の場合には、ブロックスコープが１ループ毎に切り替わっていることが分かる。