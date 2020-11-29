//2.10進数を読み込み、8進数と16進数で表示する

const readline = require('readline');

//メイン処理
const main = async () => {

    const promptInt = await prompt('整数：');
    console.log(`8進数では${promptInt.toString(8)}です。`);
    console.log(`16進数では${promptInt.toString(16)}です。`);

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