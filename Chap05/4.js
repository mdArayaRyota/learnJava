//4.変数にtrueとfalseを代入して表示

const readline = require('readline');

//メイン処理
const main = async () => {

    let b1 = true;
    let b2 = false;

    console.log(`b1 = ${b1}`);
    console.log(`b2 = ${b2}`);

};

// 起動
(async () => {
    await main();
})();