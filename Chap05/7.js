//7.実数値を入力し表示

const readline = require('readline');

//メイン処理
const main = async () => {

    let a = parseInt(10.0);
    console.log(`a = ${a}`);

};

// 起動
(async () => {
    await main();
})();