//4.1〜nまでの和を求めるメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {
    console.log('1からxまでの和を求めます。');
    let x;
    do{
        x = await prompt(`xの値：`);
    }while(x == '' || x < 0);
    console.log(`1から${x}までの和は${sum(x)}です。`);
};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseInt(answer);
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

const sum = (n) =>{
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
};
