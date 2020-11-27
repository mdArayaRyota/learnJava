//10 正の整数値nを読み込み、1からnまでの積を求める

const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    let promptInt;
    let val = 1;
    promptInt = await prompt('正の整数値:');
    let p = promptInt;
    if(p >= 1){
        while(p > 0){
            val = val * p;
            p--;
        }
        console.log(`1から${promptInt}の積は${val}です。`);
    }
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