//6.整数を読み込んで、平均は実数表示

const readline = require('readline');

//メイン処理
const main = async () => {

    const promptX = await prompt('xの値：');
    const promptY = await prompt('yの値：');
    const promptZ = await prompt('zの値：');

    let total = promptX + promptY + promptZ;
    let average = total / 3;

    console.log(`xとyとzの平均値は${average}です。`);

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