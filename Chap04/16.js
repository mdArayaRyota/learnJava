//16.身長と体重の対応表を表示させる。

const readline = require('readline');

//メイン処理
const main = async () => {
    let MinHeight = await prompt('何cmから:');
    let MaxHeight = await prompt('何cmまで:');
    let interval = await prompt('何cmごと:');
    let standardWeight = 0;
    console.log('身長    標準体重');
    console.log('---------------');
    for(let i = MinHeight; i <= MaxHeight; i += interval){
        standardWeight = (i - 100) * 0.9;
        console.log(`${i}    ${standardWeight.toFixed(1)}`);
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