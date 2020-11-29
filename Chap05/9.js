//8.double型の誤差を確認

const readline = require('readline');

//メイン処理
const main = async () => {

    //xの誤差が累積している
    console.log('            x           xの2乗');
    console.log('----------------------------------------');

    for(let x = 0; x <= 1; x += 0.001){
        console.log(` ${x}     ${x * x}`);
    }

    //整数で制御すると正確な値に近い出力となる
    console.log('   x               xの2乗');
    console.log('-----------------------------------');
    for(let i = 0; i <= 1000; i++){
        let x = i /1000;
        console.log(` ${x.toFixed(3)}     ${(x * x).toFixed(16)}`);
    }


};

// 起動
(async () => {
    await main();
})();