//2.3桁の正の整数値を用見込み、3桁の正の整数値でなかった場合再入力させる

const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    while (endFlg == 0) {
        const answer = await prompt('3桁の正の整数値:');
        if (answer < 100 || answer > 999) {
            console.log(`${answer}と入力しましたね。`);
        }
        else {
            console.log(`ok`);
            endFlg = 1;
        }
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