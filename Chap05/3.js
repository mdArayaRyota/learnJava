//3.double型の変数に値を読み込み表示する

const readline = require('readline');

//メイン処理
const main = async () => {

    const doubleInput = await prompt('x(double型)：');

    console.log(`${doubleInput}です。`);

};


//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseFloat(answer);
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