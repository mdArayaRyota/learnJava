//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //入力
    let promptInt = await prompt('入力:');

};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return answer;
};

//標準入力
const question = (question) => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readlineInterface.question(question, (answer) => {
            resolve(answer);
            readlineInterface.close();
        });
    });
};

// 起動
(async () => {
    await main();
})();
//-----------------------------------------------------------------------------------------------
//乱数生成

    const randomInteger = (num) =>{
    //0 〜 9
    return Math.floor( Math.random()*num);
    //1 〜 10
    return Math.ceil( Math.random()*num);
}
const randomInt = randomInteger(10);

//-----------------------------------------------------------------------------------------------
//改行なし 数値不可
process.stdout.write('*');

//-----------------------------------------------------------------------------------------------
//配列宣言
//newで生成される配列本体は通常の変数と異なりプログラムの実行時に生成される→記憶域が動的に確保される
//配列本体は通常の変数と性質が異なるためオブジェクトと呼ばれる
//オブジェクトを指す変数の型が参照型(reference type)、配列変数の型である配列型(array type)は参照型の一種
let array = new Array(10);

//-----------------------------------------------------------------------------------------------
//表示する桁指定
let n = 12345.6789;
n.toFixed();              // 12346 を返します。: 近似値で表現され、小数部がないことに注意してください。
n.toFixed(1);             // 12345.7 を返します。: 近似値で表現されていることに注意してください。
n.toFixed(6);             // 12345.678900: 0 を加えていることに注意してください。
(1.23e+20).toFixed(2);    // 123000000000000000000.00 を返します。
(1.23e-10).toFixed(2)     // 0.00 を返します。

//-----------------------------------------------------------------------------------------------
//スペース埋め
const spacePadding = (val, len) => {
    for(let i = 0; i < len; i++){
        val = " " + val;
    }
    return val.slice((-1) * len);
}
//0埋め
const zeroPadding = (val, len) => {
    for(let i = 0; i < len; i++){
        val = "0" + val;
    }
    return val.slice((-1) * len);
}

//-----------------------------------------------------------------------------------------------