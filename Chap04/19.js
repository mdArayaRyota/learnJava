//19.1からnまでの整数値の2乗値を表示する

const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt = await prompt('nの値:');
    for(let i = 1; i <= promptInt; i++){
        console.log(`${i}の2乗は${i * i}`);
    }
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