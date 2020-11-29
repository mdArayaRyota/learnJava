//8.double型の誤差を確認

const readline = require('readline');

//メイン処理
const main = async () => {

    console.log('       double              int');
    console.log('----------------------------------------');

    let x = 0;
    for(let i = 0; i <= 1000; i++, x += 0.001){
        console.log(` ${x.toFixed(16)}  ${(i / 1000).toFixed(16)}`);
    }


};

// 起動
(async () => {
    await main();
})();